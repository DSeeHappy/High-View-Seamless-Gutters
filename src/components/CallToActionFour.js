import React from "react";
import circleStripe from "../assets/images/circle-stripe-1.png";
import lineStripe from "../assets/images/line-stripe-1.png";
const CallToActionFour = () => {
  return (
    <section className="cta-four">
      <img src={circleStripe} className="cta-four__stripe" alt="" />
      <img src={lineStripe} className="cta-four__line" alt="" />
      <div className="container text-center">
        <div className="cta-four__title">
          <h2 className="cta-four__title">
            Seasonal care can help avoid excessive wear on your home
          </h2>
        </div>
       
      </div>
    </section>
  );
};

export default CallToActionFour;
