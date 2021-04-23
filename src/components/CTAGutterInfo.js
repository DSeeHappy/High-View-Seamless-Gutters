import React, { Component } from "react";
import cta1 from "../assets/images/cta-1.jpg";
class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={cta1} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    5" Regular &amp; 6" Oversized Seamless Gutters
                  </h2>
                </div>
                <p className="cta-three__text">
                  5-inch seamless gutter is the standard, though oversized
                  6-inch is becoming more popular. Seamless gutter can come in
                  larger sizes, most common in commercial or industrial
                  applications.
                </p>
                <p className="cta-three__text">
                  Material options are Aluminum which is standard, as well as
                  Galvanized Steel which is a more dent resistant material. We
                  usually recommend Aluminum, only in specific cases does steel
                  work better.
                </p>
                <hr />
                <p className="cta-three__text">
                  Most likely you may find yourself needing 5-inch seamless
                  aluminum gutter.
                </p>
                <p className="cta-three__text">
                  In case you are interested, the main reasons you would install
                  6-inch gutter would be:
                </p>
                <p className="cta-three__text">
                  Gutter over 40' with only 1 downspout
                </p>
                <p className="cta-three__text">
                  Onto Lower gutters with gutters above draining into them
                </p>
                <p className="cta-three__text">
                  Long Gutter runs reaching over 60'
                </p>
                <p className="cta-three__text">
                  Rooflines with large concentrations of water onto small
                  portions of gutter or with high water flow
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i class="fas fa-home"></i>{" "}
                    <p className="cta-three__single-text">
                      Aluminum is standard
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i class="fas fa-warehouse"></i>{" "}
                    <p className="cta-three__single-text">
                      Steel used for increased durability
                    </p>
                  </div>

                  <div className="cta-three__single">
                    <i class="fas fa-palette"></i>{" "}
                    <p className="cta-three__single-text">
                      We provide a variety of colors
                    </p>
                  </div>
                </div>
                <a href="#none" className="thm-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;
