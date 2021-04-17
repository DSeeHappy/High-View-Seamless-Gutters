import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/high-view/img/High-Views-Seamless-Gutters-Gutter-Close-Up-529x529.png";
import { Link } from 'gatsby';
export default class AboutTwo extends Component {
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
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Why Choose High View's Seamless Gutters?
                  </h2>
                </div>
                <p className="about-two__text">
                  No matter the weather, High View is here ready for any and all
                  your repair needs.
                </p>
                <hr />
                <p className="about-two__text">
                  We want to make sure you’re 100% satisfied, and we go the
                  extra mile to make your experience as enjoyable and
                  stress-free as possible.
                </p>
<br/>
                <Link href="#none" className="thm-btn">
                  Check out our Services!
                </Link>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Installed over
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 2548 : 0} />
                      </VisibilitySensor>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
