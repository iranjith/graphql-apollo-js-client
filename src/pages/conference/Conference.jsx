import * as React from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import "./style-sessions.css";
import { Sessions, AddSession } from "./Sessions"
import { Speakers, Speaker } from "./Speakers"
import banner_image from "../../assets/images/banner3.png";

export function Conference() {
  const { path, url } = useMatch();

  return (
    <>
      <Routes>
        <Route path={`${path}/sessions/new`}>	
          <AddSession />	
        </Route>
        <Route path={`${path}/sessions`}>
          <Sessions />
        </Route>
        <Route path={`${path}/speakers`}>
          <Speakers />
        </Route>
        <Route path={`${path}/speaker/:speaker_id`}>
          <Speaker />
        </Route>
        <Route path={`${path}`}>
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
        </Route>
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