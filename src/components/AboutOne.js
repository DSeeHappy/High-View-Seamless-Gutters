import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ClientStripe from "../assets/images/circle-stripe.png";
import aboutImage1 from "../assets/images/high-view/img/rainonroof.png";
import aboutImage2 from "../assets/images/high-view/img/closeupgutters.png";

class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one ">
        <img src={ClientStripe} className="about-one__circle" alt="" />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              High View's Quality Seamless Gutters
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src={aboutImage1} alt="" />
              </div>
              <div className="col-lg-6">
                <img src={aboutImage2} alt="" />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 2750 : 0} />
                </VisibilitySensor>
              </p>
            
              <p className="about-one__review-text">Colorado Ready Gutters</p>
            </div>
          </div>
          <p className="about-one__text">
            No matter the weather, High View is here ready for any and all your
            repair needs.
          </p>
          <hr />
          <p className="about-one__text">
            We want to make sure you’re 100% satisfied, and we go the extra mile
            to make your experience as enjoyable and stress-free as possible.
          </p>
          <a href="#none" className="thm-btn about-one__btn">
            Receive Your Free Online Quote!
          </a>
        </div>
      </section>
    );
  }
}

export default AboutOne;
