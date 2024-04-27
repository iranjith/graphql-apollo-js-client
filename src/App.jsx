import React from "react";
import { Home } from "./pages/home/Home";
import { Media } from "./pages/media/Media";
import { OurStory } from "./pages/our-story/OurStory";
import { Robotics } from "./pages/robotics/Robotics";
import { Conference } from "./pages/conference/Conference";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", // your graphql server link
  }),
  credentials: "same-origin",
});

function AppRouter() {
  return (
    <div id="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/media"
            element={
              <>
                <Media />
              </>
            }
          ></Route>
          <Route
            path="/our-story"
            element={
              <>
                <OurStory />
              </>
            }
          ></Route>
          <Route
            path="/robotics"
            element={
              <>
                <Robotics />
              </>
            }
          ></Route>
          <Route
            path="/conference"
            element={
              <>
                <Conference />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
