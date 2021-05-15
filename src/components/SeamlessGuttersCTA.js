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
                  <CountUp end={this.state.startCounter ? 4548 : 0} />
                </VisibilitySensor>
              </p>

              <p className="about-one__review-text">Colorado Ready Gutters</p>
            </div>
          </div>
          <p className="about-one__text">
            We understand you may be asking yourself, why pay for Seamless
            Gutters in Aluminum or Steel over going to Home Depot for Vinyl
            Sectional Gutters?
          </p>
          <p className="about-one__review-text">
            Quality Installation, Security and Strength are the largest reasons
            for choosing Seamless Gutters in Aluminum or Steel for Colorado's
            Weather.
          </p>
          <hr />
          <p className="about-one__text">
            When our team installs your Seamless Gutters, we make sure to
            provide a thorough inspection for common issues caused by wear,
            damage, poor installation or lack of maintenance.
          </p>
          <p className="about-one__text">
            Without a proper inspection, you may have a newly installed gutter
            system with the exact same problems you were needing fixed. Whether
            it was a backflowing gutter causing siding and foundation damage,
            improperly placed downspouts which may lack proper drainage.
          </p>
          <p className="about-one__review-text">
            We provide recommendations based on your homes needs
          </p>

          <p className="about-one__text">
            Without a pushy sales tactic, only honest information. Changes which
            may include installing a french drain when you don't have proper
            drainage, installation of Heat Cable if you find yourself with
            severe ice damming. Gutter Guard installations if you find yourself
            cleaning your gutters very often or hiring us for the same stubborn
            gutter with pine needles.
          </p>

          <p className="about-one__text">
            We understand gutters are a large part of your homes defense against
            water damage, because if water doesn't flow away from your home's
            foundation and into the sewer. You may be in for a larger issue than
            having a drippy or clogged gutter.
          </p>
          <a
            href="https://www.honeybook.com/widget/high_views_seamless_gutters_181969/cf_id/60862db0c4c5061e9af930c8"
            className="thm-btn about-one__btn"
          >
            Free Estimate{" "}
          </a>
        </div>
      </section>
    );
  }
}

export default AboutOne;
