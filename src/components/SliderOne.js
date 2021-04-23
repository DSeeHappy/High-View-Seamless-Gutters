import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "swiper/css/swiper.css";

const SliderOne = (props) => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="banner-wrapper" style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            minHeight: 1350,
          }}
          loading="eager"
          layout="fullWidth"
          aspectRatio={2 / 1}
          // You can optionally force an aspect ratio for the generated image
          // This is a presentational image, so the alt should be an empty string
          alt="High View's Seamless Gutters Denver CO Quality Seamless Gutters "
          src={"../assets/images/high-view/img/house4k.png"}
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            backgroundColor:"rgba(1, 34, 55, 0.9)"

          }}
        >
          {/* Any content here will be centered in the component */}
          <div className="banner-one__slide banner-one__slide-one">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    Let our Gutter Pro's <br /> take care of your gutters
                  </h3>
                  <p className="banner-one__tag-line">
                    Everything installed by us is ready to stand the weather
                    here in Colorado
                  </p>

                  <Link to="/gallery" className="thm-btn banner-one__btn">
                    Check out our Previous Work!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-one__cta">
          <div className="banner-one__cta-icon">
            <i class="fas fa-donate"></i>
          </div>
          <div className="banner-one__cta-title">
            <h3 className="banner-one__cta-text">
              <Link to="/financing">
                Financing available up to $65,000, Find out more
              </Link>
            </h3>
          </div>
          <div className="banner-one__cta-link">
            <Link to="/financing">
              <i className="kipso-icon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderOne;
