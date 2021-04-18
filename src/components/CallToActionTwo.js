import React from "react";

const CallToActionTwo = () => {
  return (
    <div className="cta-two">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 thm-base-bg">
            <div className="cta-two__single">
              <div className="cta-two__icon">
                <span>
                  <i className="fas fa-toolbox"></i>{" "}
                </span>
              </div>
              <div className="cta-two__content">
                <h2 className="cta-two__title">
                  Professional Emergency Repair
                </h2>
                <p className="cta-two__text">
                  High View's Seamless Gutters has extensive experience in the repair,
                  maintenance, or replacement especially in emergency
                  situations.
                </p>
                <hr />
                <p className="cta-two__text">
                  Our experienced professionals are ready in case of damage
                  repair.
                </p>
                <a href="tel:720-741-2300" className="thm-btn cta-two__btn">
                  Call Now For Emergency Repairs
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thm-base-bg-2">
            <div className="cta-two__single">
              <div className="cta-two__icon">
                <span>
                  <i className="far fa-building"></i>{" "}
                </span>
              </div>
              <div className="cta-two__content">
                <h2 className="cta-two__title">
                  Locally Owned Colorado Business
                </h2>
                <p className="cta-two__text">
                  We are High View's Seamless Gutters and we've been installing
                  gutters here in Colorado since 2018.
                </p>
                <hr />
                <p className="cta-two__text">
                  The Owner Gilberto Sanchez has over 10 years of professional
                  experience working with different local businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTwo;
