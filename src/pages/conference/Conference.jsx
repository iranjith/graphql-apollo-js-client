import * as React from "react";
import { Routes, Route, Link, useMatch, useLocation } from "react-router-dom";
import "./style-sessions.css";
import { Sessions, AddSession } from "./Sessions";
import { Speakers, Speaker } from "./Speakers";
import banner_image from "../../assets/images/banner3.png";

export function Conference() {
  const { pathname } = useLocation();
  const url = window.location.href;
  console.log({ pathname, url });

  return (
    <>
      <Routes>
        <Route
          path='/sessions/new'
          element={
            <>
              <AddSession />
            </>
          }
        ></Route>
        <Route
          path='/sessions'
          element={
            <>
              <Sessions />
            </>
          }
        ></Route>
        <Route
          path='/speakers'
          element={
            <>
              <Speakers />
            </>
          }
        ></Route>
        <Route
          path='/speakers/:id'
          element={
            <>
              <Speaker />
            </>
          }
        ></Route>
        <Route
          path='/'
          element={
            <section className="banner">
              <img src={banner_image} alt="" />
              <div className="inner-content col-md-12">
                <div className="container jumboContainer">
                  <div className="col-md-8 middle">
                    <HeroLinkButton to={`${url}/speakers`}>
                      View Speakers
                    </HeroLinkButton>
                    <HeroLinkButton to={`${url}/sessions`}>
                      View Sessions
                    </HeroLinkButton>
                  </div>
                </div>
              </div>
            </section>
          }
        ></Route>
      </Routes>
    </>
  );
}

function HeroLinkButton({ children, to }) {
  return (
    <h1>
      <Link
        style={{
          border: "solid 1px white",
          borderRadius: 20,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#0D1424",
        }}
        to={to}
      >
        {children}
      </Link>
    </h1>
  );
}
