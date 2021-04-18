import React from "react";
import FinancingFaq from "../components/FinancingFaq";

const CourseDetails = (props) => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <p className="course-details__author">
                Financing by
                <a href="https://www.greensky.com/about-us/">
                  GreenSky Financing
                </a>
              </p>

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">{props.title}</h2>
                </div>
                <div className="course-details__top-right">
                  <a
                    href="https://www.greenskyonline.com/greensky/faq"
                    className="course-one__category"
                  >
                    Faq
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img
                  src="/assets/img/High-View-Seamless-Gutter-GreenSky-Financing-Agreement-Image-770x447.png"
                  alt=""
                />
              </div>

              <ul
                className="course-details__tab-navs list-unstyled nav nav-tabs"
                role="tablist"
              >
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
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <h2>Gutter Services Financing With GreenSky Financing</h2>
                  <hr />
                  <p className="course-details__tab-text">
                    When it comes to taking care of your home, making sure small
                    issues don't cause big problems can be a large expense in
                    and of itself.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    Let GreenSky Financing help finance the quality maintenance
                    of your home. You can receive fast approval of credit up to
                    $65,000 with affordable payment options and friendly
                    customer service.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    You can select from GreenSky's financing options to see what
                    works best for your financial needs.
                  </p>

                  <br />
                  <h2>Why choose High View?</h2>
                  <hr />
                  <p className="course-details__tab-text">
                    Our focus is to reduce long-term headaches by making sure we
                    dot our i's and cross our t's when it comes to home
                    maintenance. And a large part of that depends on the quality
                    care of your gutters, making sure that when they need
                    repairs, maintenance, or replacement you don't wait until
                    after there are water-related damages to take action.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    Taking half-measures like installing a sectional gutter
                    system or vinyl gutters only cause problems that can be
                    solved the first time with seamless aluminum gutters or
                    seamless steel gutters. These types of gutters are made to
                    withstand the weather here in Colorado, from the harsh heat
                    to the fierce cold.
                  </p>
                  <hr />
                  <p className="course-details__tab-text">
                    At High View we provide a 2 year labor warranty
                  </p>
                  <br />
                  <h2>Seamless Gutters Cost</h2>
                  <hr />
                  <p className="course-details__tab-text">
                    While the thought of installing a quality seamless gutter
                    system can be daunting as it usually comes at an inopportune
                    time. Usually during a severe storm or after many years of
                    wear, causing the gradual degradation of your home if not
                    cared for immediately.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    We understand the linear foot price of Seamless Aluminum or
                    Steel Gutters can seem like a greater expense than a
                    traditional gutter system that may involve lower quality
                    materials or come in sections.
                  </p>
                  <br />

                  <p className="course-details__tab-text">
                    You can rest assured that at High View, we provide the
                    highest quality installation and warranty in the business.
                    We make sure the investment you place into your home is in
                    good hands. At the end of the day, it is always best to let
                    a Gutter Company take care of your Gutters.
                  </p>
                  <br />
                  <h2>6 and 12 Month No Interest Financing</h2>
                  <hr />
                  <p className="course-details__tab-text">
                    Choose between our 6 and 12 months No Interest Financing
                    options, depending on the scope of the project and the
                    amount needing to be financed. You can rest assured the
                    investment in your home lasts for years to come. Helping you
                    keep on top of your home's maintenance without the stress or
                    the hassle
                  </p>
                  <br />
                  <h2>138 Month Extended Financing</h2>
                  <hr />
                  <p className="course-details__tab-text">
                    If you are needing more time, we also provide GreenSky's 138
                    Month Extended Financing. For times when we may need major
                    work but need that extra amount of time needed to pay. The
                    best part is you know that the quality care you provide to
                    your home makes sure your house stays a home. Providing a
                    simple, stress-free way of caring for your home for years to
                    come.
                  </p>
                  <br />

                  <ul className="list-unstyled course-details__overview-list">
                    <li>We pride ourselves on masterful installation.</li>
                    <li>Let a Gutter Company take care of your Gutters</li>
                    <li>We Provide a 2-year Labor Warranty</li>
                  </ul>
                  <br />
                  <h2>
                    You can focus on enjoying your home instead of wondering
                    what's next.
                  </h2>
                  <hr />
                  <p className="course-details__tab-text">
                    We know that Gutters are probably the last thing anyone
                    thinks of when they think of required home maintenance. The
                    reality can set in too late once your foundation settles and
                    you notice cracks from that drippy gutter. Making a simple
                    and relatively inexpensive fix into a monumental dilemma and
                    a real drain on your wallet.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    Your home may be in different stages of wear and your
                    gutters may still have some life left, you may just need
                    some preventative maintenance like a French Drain
                    installation. The installation of a French Drain in the
                    correct place may prevent long-term damage to your
                    foundation if your downspouts don't drain away from your
                    home.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    You may live near the foothills so you definitely notice
                    when the gutters are failing and are causing an ice dam. You
                    may benefit from Heat Cable Installation to stop the freeze
                    and stop the ice dam from forming. For a complete barrier,
                    you may also be interested in a second defense with the Hot
                    Edge. The installation of Hot Edge provides an extended
                    reach to the Heat Cable, keeping your gutters from forming
                    an ice dam.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    You may just have a pesky pine needle problem and Gutter
                    Guard Installation may be your solution, this may be a good
                    fit for someone who has pine trees very close to their home.
                    We provide a variety of Gutter Guard micro-mesh and gutter
                    screen options and we can work within your needs. From
                    making sure you reduce your gutter maintenance headaches to
                    making sure nothing can call your gutters a home. Causing
                    possible health hazards especially for those with
                    allergy-prone children.
                  </p>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="services"
                >
                  <h3 className="course-details__tab-title">
                    High View's Seamless Gutter Services{" "}
                  </h3>
                  <br />
                  <p className="course-details__tab-text">
                    With GreenSky Financing, you can make sure your house stays
                    a home with our quality gutter services
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Seamless Gutter Repair</a>{" "}
                      </div>
                      <div className="course-details__curriculum-list-right">
                        5" &amp; 6" Gutters
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Seamless Gutter Installation</a>{" "}
                      </div>
                      <div className="course-details__curriculum-list-right">
                        5" &amp; 6" Gutters
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Gutter Guard Installation</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        5" &amp; 6" Gutters
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">
                          Fascia &amp; Soffit Repair &amp; Installation
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">French Drain Repair &amp; Installation</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Painting</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Steam Snow Removal</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Heat Tape Installation</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <a href="#">Hot Edge Installation</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="faq"
                >
                  <div className="row">
                    <FinancingFaq />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">
                Quick, Paperless Application Process{" "}
              </p>
              <p className="course-details__price-amount">
                Credit limits up to $65,000
              </p>
              <a
                href={props.financeURL}
                target="_blank"
                className="thm-btn course-details__price-btn"
              >
                Apply Now
              </a>
            </div>

            <div className="course-details__meta">
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Fast Approvals
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-folder-open"></i>
                </span>
                Affordable Payment Options{" "}
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-user-circle"></i>
                </span>
                Friendly Customer Service
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Multiple ways to make a payment{" "}
              </a>
            </div>
            <div className="course-details__list">
              <h2 className="course-details__list-title">Financing Options</h2>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img
                    src="/assets/img/GreenSky-Logo-66x66.png"
                    alt="GreenSky Financing-Logo |Financing For High View's Seamless Gutters "
                  />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    from <span>GreenSky Financing</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img
                    src="/assets/img/GreenSky-Logo-66x66.png"
                    alt="GreenSky Financing-Logo |Financing For High View's Seamless Gutters "
                  />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    from <span>GreenSky Financing</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p className="text-center">
        GreenSky® Program is a program name for certain consumer credit plans
        extended by participating lenders to borrowers for the purchase of goods
        and/or services from participating merchants. Participating lenders are
        federally insured, equal opportunity lender banks. GreenSky® is a
        registered trademark of GreenSky, LLC. GreenSky Servicing, LLC services
        the loans on behalf of participating lenders. NMLS #1416362
      </p>
      <br />
      <p className="text-center">
        Subject to credit approval. Subject to credit approval. Interest is
        billed during the promotional period but all interest is waived if the
        purchase amount is paid in full within 6 months. There are no required
        minimum monthly payments during the promotional period.
      </p>
      <p className="text-center">
        Subject to credit approval. Interest is billed during the promotional
        period but all interest is waived if the purchase amount is paid in full
        within 12 months. Minimum monthly payments required during the
        promotional period. Making minimum monthly payments during the
        promotional period will not pay off the entire principal balance.
      </p>
      <p className="text-center">
        Subject to credit approval. Subject to credit approval. Fixed interest
        rate of 9.99% for 138 months. Payment example assumes one time $10,000
        purchase on approval date (APR 10.07%) with 1 payment of $161.15
        followed by 137 amortized payments of $122.15. Payments assume Account
        Activation charge of $39 applies and is due with first required payment.
      </p>
    </section>
  );
};

export default CourseDetails;
