import React from "react";
import banner_image from "../../assets/images/banner3.png";
import girl_image from "../../assets/images/girl.png";
import sec2_image from "../../assets/images/sec2.jpg";
import sec3_image from "../../assets/images/sec3.jpg";


export function Media() {
  return (
    <>
      <section className="banner">
        <img src={banner_image} alt="" />
        <div className="inner-content col-md-12">
          <div className="container">
            <h1>WATCH THIS VIDEO</h1>
            <span>WE DO THINGS IN IT</span>

            <p>
              <span>
                <i className="fa fa-play"></i>
              </span>
              Click for inspiration at cosmic levels
            </p>
          </div>
        </div>
      </section>

      <section className="sec_include">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 adj_text">
              <div className="col-xs-12 col-sm-4 col-md-4 mobile-adj_text">
                <img src={girl_image} alt="Public" />
              </div>

              <h3>Sic Transit Gloria Mundi</h3>
              <p>
                At the deepest level of its core, technology embodies the circle
                of life. And from an old age Larry Shepard unlearned how to
                harness that circle and perpetuate it through more technology. I
                need more copy here. At the deepest level of its core,
                technology embodies the circle of life. And from an old age
                Larry Shepard unlearned how to harness that circle and
                perpetuate it through more technology. At the deepest level of
                its core, technology embodies the circle of life.
              </p>
              <div className="readtext"></div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <img className="DESKTOP-IMG" src={girl_image} alt="Public" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec_include-middle">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <img src={sec2_image} alt="Public" />
            </div>

            <div className="col-xs-12 col-sm-8 col-md-8 adj_text">
              <h3>Sic Transit Gloria Mundi</h3>
              <p>
                At the deepest level of its core, technology embodies the circle
                of life. And from an old age Larry Shepard unlearned how to
                harness that circle and perpetuate it through more technology. I
                need more copy here. At the deepest level of its core,
                technology embodies the circle of life. And from an old age
                Larry Shepard unlearned how to harness that circle and
                perpetuate it through more technology. At the deepest level of
                its core, technology embodies the circle of life.
              </p>
              <div className="readtext"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_include1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 adj_text">
              <div className="col-xs-12 col-sm-4 col-md-4 mobile-adj_text">
                <img src={sec3_image} alt="Public" />
              </div>
              <h3>Sic Transit Gloria Mundi</h3>
              <p>
                At the deepest level of its core, technology embodies the circle
                of life. And from an old age Larry Shepard unlearned how to
                harness that circle and perpetuate it through more technology. I
                need more copy here. At the deepest level of its core,
                technology embodies the circle of life. And from an old age
                Larry Shepard unlearned how to harness that circle and
                perpetuate it through more technology. At the deepest level of
                its core, technology embodies the circle of life.
              </p>
              <div className="readtext"></div>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <img className="DESKTOP-IMG" src={sec3_image} alt="Public" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
