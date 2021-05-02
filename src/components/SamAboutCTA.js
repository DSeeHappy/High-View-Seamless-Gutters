import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <StaticImage
                src="../assets/images/high-view/img/High-Views-Seamless-Gutters-Sam-Avila-LeafBlaster-Gutter-Guard-932x764.png"
                className="cta-three__image"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    <span>Owner </span> | Sam Avila
                  </h2>
                  <hr />
                </div>
                <p className="cta-three__text">
                  Local Sales Professional, he always makes sure you are 100%
                  satisfied. Co-Owner with Gilberto Sanchez, Sam dedicates
                  himself to high-quality customer service. Ensuring that every
                  homeowner understands their home's needs without that
                  heavy-handed sales pitch.
                </p>
                <hr />
                <p className="cta-three__text">
                  Only recommending what's best for your home's longevity.
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i class="fas fa-mobile-alt"></i>{" "}
                    <p className="cta-three__single-text">Simple</p>
                  </div>
                  <div className="cta-three__single">
                    <i class="far fa-thumbs-up"></i>{" "}
                    <p className="cta-three__single-text">Quality</p>
                  </div>

                  <div className="cta-three__single">
                    <i class="fas fa-clipboard-check"></i>{" "}
                    <p className="cta-three__single-text">Clean</p>
                  </div>
                </div>

                <a
                  target="__blank"
                  href="https://high-view-construction.s3-us-west-2.amazonaws.com/High-View-Sam-Avila.vcf"
                  className="thm-btn-2"
                >
                  Save My Business Card!
                </a>
                <hr />

                <a
                  href="https://g.page/High-View-Seamless-Gutter-CO/review?rc"
                  target="__blank"
                  className="thm-btn"
                >
                  Leave us a Review!
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
