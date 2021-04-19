import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Courses = () => {
  return (
    <>
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
      <section className="course-one course-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="course-one__single">
                <div className="course-one__image">
                  <StaticImage
                    src="../assets/images/high-view/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                    alt="GreenSky Financing For High View's Seamless Gutters Services 6 Months Interest Free Financing"
                  />{" "}
                  <i className="far fa-heart"></i>
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
                    <Link href="financing/GreenSky-6-Months-No-Interest-Financing">
                      <a> No Intereste if Paid in Full in 6 Month</a>
                    </Link>
                  </h2>

                  <div className="course-one__meta">
                    <a href="/course-details">
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
            <div className="col-lg-4">
              <div className="course-one__single">
                <div className="course-one__image">
                  <StaticImage
                    src="../assets/images/high-view/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                    alt="GreenSky Financing For High View's Seamless Gutters Services 6 Months Interest Free Financing"
                  />{" "}
                  <i className="far fa-heart"></i>
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
            <div className="col-lg-4">
              <div className="course-one__single">
                <div className="course-one__image">
                  <StaticImage
                    src="../assets/images/high-view/img/High-View-Finance-With-GreenSky-Logo-370x243.png"
                    alt="GreenSky Financing For High View's Seamless Gutters Services 6 Months Interest Free Financing"
                  />{" "}
                  <i className="far fa-heart"></i>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
