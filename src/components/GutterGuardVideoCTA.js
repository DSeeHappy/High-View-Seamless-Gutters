import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import fact2 from "../assets/images/fact-2-1.jpg";
import { StaticImage } from "gatsby-plugin-image";
class VideoThree extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      startCounter: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="video-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="video-three__fact thm-base-bg">
                    <i class="fas fa-home"></i>{" "}
                    <p className="video-three__fact-count counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 4250 : 0} />
                      </VisibilitySensor>{" "}
                    </p>
                    <p className="video-three__fact-text">Happy Homes</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="video-three__fact thm-base-bg-2">
                    <i class="fas fa-check-circle"></i>{" "}
                    <p className="video-three__fact-text">
                      <br />
                      We are a DoneRight Partner for LeafBlaster Brand Gutter Covers
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="video-three__image">
                    <StaticImage
                      src="../assets/images/high-view/img/High-View's-Seamless-Gutters-LeafBlaster-RainWater-570x295.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-three__box">
                <h2 className="video-three__title">
                  Only the <br /> Highest-Quality Materials
                </h2>
                <div className="video-three__btn-box">
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="Rx6CF33PNBk"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <div
                    onClick={this.openModal}
                    onKeyDown={this.openModal}
                    role="button"
                    tabIndex={0}
                    className="video-three__popup"
                  >
                    <i className="fas fa-play"></i>
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

export default VideoThree;
