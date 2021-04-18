import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const TestimonialOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="testimonials-one testimonials-one__home-three">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            What our customers <br />
            have to say
          </h2>
        </div>
        <div className="testimonials-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src="/assets/images/qoute-1-1.png" alt="" />
                </div>
                <p className="testimonials-one__text">
                  I have worked for them for 4 years whenever I need gutters and
                  they always do a fantastic job
                </p>
                <img
                  src="/assets/images/team-1-1.jpg"
                  alt=""
                  className="testimonials-one__img"
                />
                <h3 className="testimonials-one__name">Andrew G</h3>
                <p className="testimonials-one__designation">
                  I highly recommend them
                </p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src="/assets/images/qoute-1-1.png" alt="" />
                </div>
                <p className="testimonials-one__text">
                  They were very reasonable. They came in and did the job.
                  Everything Seems to work out and were happy with what they did
                </p>
                <img
                  src="/assets/images/team-1-2.jpg"
                  alt=""
                  className="testimonials-one__img"
                />
                <h3 className="testimonials-one__name">Christian L</h3>
                <p className="testimonials-one__designation"></p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src="/assets/images/qoute-1-1.png" alt="" />
                </div>
                <p className="testimonials-one__text">
                  They were great and wonderful to work with. They wer quick
                  every time I text or email them and they answer my question
                  right away.
                </p>
                <img
                  src="/assets/images/team-1-3.jpg"
                  alt=""
                  className="testimonials-one__img"
                />
                <h3 className="testimonials-one__name">Holly H</h3>
                <p className="testimonials-one__designation">
                  Their price is better than anyone else
                </p>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
