import React from "react";
import circleStripe from "../assets/images/circle-stripe.png";
import category1 from "../assets/images/high-view/img/HighView__CO_Seamless_Gutters.png";
import category2 from "../assets/images/high-view/img/HighView__CO_Fascia-Half-Round_Gutter.png";
import category3 from "../assets/images/high-view/img/High-Views-Seamless-Gutters-LeafBlaster-Gutter-Guard-270x304.png";
import category4 from "../assets/images/high-view/img/HighView__CO_frenchdrainpipe.png";
import category5 from "../assets/images/high-view/img/HighView__CO_paintservices.png";
const CourseCatThree = () => {
  return (
    <section className="course-category-three">
      <img
        src={circleStripe}
        className="course-category-three__circle"
        alt=""
      />
      <div className="container">
        <div className="block-title">
          <h2 className="block-title__title">
            Check out <br /> our services!
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category1} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">5" &amp; 6" Gutters </a>
                </h3>
                <p className="course-category-three__text">
                  Seamless Gutters For The Best Performance
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category2} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">Fascia &amp; Soffit </a>
                </h3>
                <p className="course-category-three__text">
                  Repairs &amp; New Installations
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category3} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">Gutter Guards</a>
                </h3>
                <p className="course-category-three__text">
                  Varying Styles including LeafBlaster
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category4} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">French Drains</a>
                </h3>
                <p className="course-category-three__text">
                  NEW-CONSTRUCTION AND PRE-EXISTING HOMES
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default CourseCatThree;
