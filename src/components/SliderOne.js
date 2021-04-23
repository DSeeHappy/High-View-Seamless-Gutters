import React, { useState } from "react";
import { Link } from "gatsby";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import slidestrech from "../assets/images/slider-1-scratch.png";
import person1 from "../assets/images/slider-1-person-1.png";
import person2 from "../assets/images/slider-1-person-2.png";
const SliderOne = () => {
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
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <Swiper getSwiper={setSwiper}>
          <div className="banner-one__slide banner-one__slide-one">
            <div className="container">
             
              <img src={person1} className="banner-one__person" alt="" />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    Let our Gutter Pros <br /> take care of your gutters
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
          <div className="banner-one__slide banner-one__slide-two">
            <div className="container">
             
              <img src={person2} className="banner-one__person" alt="" />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    Let our Gutter Pros <br /> take care of your gutters
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
        </Swiper>
      </section>
      <div className="banner-carousel-btn">
        <div
          onClick={goPrev}
          onKeyUp={goPrev}
          tabIndex={0}
          role="button"
          className="banner-carousel-btn__left-btn banner-arrow"
        >
          <i className="kipso-icon-left-arrow"></i>
        </div>
        <div
          onClick={goNext}
          onKeyDown={goNext}
          role="button"
          tabIndex={0}
          className="banner-carousel-btn__right-btn banner-arrow"
        >
          <i className="kipso-icon-right-arrow"></i>
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
  );
};
export default SliderOne;
