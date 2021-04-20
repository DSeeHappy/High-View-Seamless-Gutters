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
                  <h2 className="block-title__title">We love referrals! </h2>
                </div>
                <p className="cta-three__text">
                  We only believe in referring someone you can trust. If we have
                  won over your trust, tell your friends, family and co-workers
                  about the quality service we provide.
                </p>
                <hr />
                <p className="cta-three__text">
                  We strive to provide the highest-quality service in Colorado. <br/>
                  If you've enjoyed our service, feel free to share that experience.
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
                <a href="https://g.page/High-View-Seamless-Gutter-CO/review?rc" target="__blank" className="thm-btn">
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
