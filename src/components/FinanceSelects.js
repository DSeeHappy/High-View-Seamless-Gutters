import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import course1 from "../assets/images/course-1-1.jpg";
import course2 from "../assets/images/course-1-2.jpg";
import course3 from "../assets/images/course-1-3.jpg";
import course4 from "../assets/images/course-1-4.jpg";
import course5 from "../assets/images/course-1-5.jpg";
import course6 from "../assets/images/course-1-6.jpg";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";

import { Link } from "gatsby";

const CourseThree = () => {
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
    <div>
      <section className="course-one__top-title home-three">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Home Improvement Financing <br /> to Fit Your Needs
            </h2>
            <p className="pt-3">
              The GreenSky® Loan Program's focus is simple—to help you create
              the home of your dreams.
            </p>
            <hr />
            <p className="pt-3">
              From deferred interest promotions to affordable budget-minded
              options, GreenSky® loans are an easy and convenient way to pay for
              any home improvement project.
            </p>
          </div>
        </div>
      </section>
      <section className="course-one course-one__teacher-details home-three">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img
                      src="/assets/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                      alt="GreenSky Financing For High View's Seamless Gutters Services 6 Months Interest Free Financing"
                    />
                  </div>
                  <div className="course-one__content">
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=3068&channel=External-Button-03"
                      className="course-one__category"
                    >
                      GreenSky Financing
                    </a>

                    <h2 className="course-one__title">
                      <Link href="/financing/GreenSky-6-Months-No-Interest-Financing">
                        <a> No Intereste if Paid in Full in 6 Month</a>
                      </Link>
                    </h2>

                    <div className="course-one__meta">
                      <a>
                        <i className="far fa-clock"></i> 6 Months
                      </a>
                    </div>
                    <Link
                      href="/financing/GreenSky-6-Months-No-Interest-Financing"
                      className="course-one__link"
                    >
                      More Details
                    </Link>
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=3068&channel=External-Button-03"
                      className="course-one__link"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-4">
                  <div className="course-one__image">
                    <img
                      src="/assets/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                      alt="GreenSky Financing For High View's Seamless Gutters Services 138 Months Extended Financing"
                    />
                  </div>
                  <div className="course-one__content">
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=1389&channel=External-Button-03"
                      className="course-one__category"
                    >
                      GreenSky Financing
                    </a>

                    <h2 className="course-one__title">
                      <Link href="/financing/GreenSky-138-Months-Extended-Financing">
                        <a> 138 Months Extended Financing Available</a>
                      </Link>
                    </h2>

                    <div className="course-one__meta">
                      <a>
                        <i className="far fa-clock"></i> 138 Months
                      </a>
                    </div>
                    <Link
                      href="/financing/GreenSky-138-Months-Extended-Financing"
                      className="course-one__link"
                    >
                      More Details
                    </Link>
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=1389&channel=External-Button-03"
                      className="course-one__link"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">
                    <img
                      src="/assets/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                      alt="GreenSky Financing For High View's Seamless Gutters Services 12 Months Interest Free Financing"
                    />
                  </div>
                  <div className="course-one__content">
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=4123&channel=External-Button-03"
                      className="course-one__category"
                    >
                      GreenSky Financing
                    </a>

                    <h2 className="course-one__title">
                      <Link href="/financing/GreenSky-12-Months-No-Interest-Financing">
                        <a> No Intereste if Paid in Full in 12 Month</a>
                      </Link>
                    </h2>

                    <div className="course-one__meta">
                      <a>
                        <i className="far fa-clock"></i> 12 Months
                      </a>
                    </div>
                    <Link
                      href="/financing/GreenSky-12-Months-No-Interest-Financing"
                      className="course-one__link"
                    >
                      More Details
                    </Link>
                    <a
                      target="_blank"
                      href="https://projects.greensky.com/MerchantLoanApplication?apptype=short&merchant=81078210&dealerplan=4123&channel=External-Button-03"
                      className="course-one__link"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseThree;
