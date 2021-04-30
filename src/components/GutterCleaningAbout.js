import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <StaticImage
                src="../assets/images/high-view/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-932x764.png"
                className="cta-three__image"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Regular Gutter Maintenance
                  </h2>
                </div>
                <p className="cta-three__text">
                  Gutters and downspouts should be cleaned as often as needed,
                  especially if you have pine trees regular maintenance may be every Spring and
                  Fall.
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i class="fas fa-mobile-alt"></i>{" "}
                    <p className="cta-three__single-text">Simple </p>
                  </div>
                  <div className="cta-three__single">
                    <i class="far fa-thumbs-up"></i>{" "}
                    <p className="cta-three__single-text">Quality </p>
                  </div>

                  <div className="cta-three__single">
                    <i class="fas fa-clipboard-check"></i>{" "}
                    <p className="cta-three__single-text">Clean</p>
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
