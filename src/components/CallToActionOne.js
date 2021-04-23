import React from "react";
import ctabg1 from "../assets/images/high-view/img/largeroofA.png";
import { Link } from "gatsby";

const CallToActionOne = () => {
  return (
    <section
      className="cta-one cta-one__home-one"
      style={{ backgroundImage: `url(${ctabg1})` }}
    >
      <div className="container">
        <h2 className="cta-one__title">At High View's Seamless Gutters</h2>
        <h2 className="cta-one__title">
          We pride ourselves on masterful installation.
        </h2>
        <div className="cta-one__btn-block">
          <a
            href="https://book.housecallpro.com/book/High-view-seamless-gutters/c03bbfa024d84f109c8e4e6af991bec4"
            target="__blank"
            className="thm-btn cta-one__btn"
          >
            Schedule your Gutter Services Online!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
