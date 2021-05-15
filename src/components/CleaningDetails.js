import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-1.jpg";
import courseD1 from "../assets/images/course-d-1.jpg";
import lcImage1 from "../assets/images/lc-1-1.jpg";
import lcImage2 from "../assets/images/lc-1-2.jpg";
import lcImage3 from "../assets/images/lc-1-3.jpg";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                    DIY or Hire High View's Gutter Cleaning Pro's
                  </h2>
                </div>
                <div className="course-details__top-right">
                  <a href="#none" className="course-one__category">
                    Quality Cleaning
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img src={courseD1} alt="" />
                <i className="far fa-heart"></i>
              </div>

              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
               
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <p className="course-details__tab-text">
                    We understand that everyone has a different budget and
                    different maintenance needs. If you have the equipment and
                    willingness to head onto your roof and clean we definitely
                    understand.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    But consider the cost of the equipment needed, you would
                    likely need at a minimum a 16ft ladder which can on average
                    cost $200. Add in any equipment needed to properly clean the
                    gutters or caulk the corners or end-caps. On top of that,
                    you would still need to spend your time and energy to
                    properly clean your entire home's gutter system, including
                    downspouts. This can become an arduos task the larger the
                    home and the more stories to climb making things more
                    dangerous.
                  </p>
                  <br />
                  <ul className="list-unstyled course-details__overview-list">
                    <li>
                      Our professionals provide quality maintenance services.
                    </li>
                    <li>
                      We provide simple maintenance packages, making your life
                      easier.
                    </li>
                    <li>
                      Properly maintaining your gutters is part of your first
                      line of defense against water damage.
                    </li>
                    <li>We are insured.</li>
                  </ul>
                </div>
              
              
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">Starting at </p>
              <p className="course-details__price-amount">$200.00</p>
              <a href="https://www.honeybook.com/widget/high_views_seamless_gutters_181969/cf_id/60862db0c4c5061e9af930c8" className="thm-btn course-details__price-btn">
                Receive your free quote!
              </a>
            </div>

     
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
