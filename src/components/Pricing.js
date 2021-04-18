import React from "react";

const Pricing = () => {
  return (
    <section className="pricing-one pricing-page ">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Here are a few things you can expect from us:
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price"> Simple </h2>
                <p className="pricing-one__name">Inspection</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>
                    We will provide you a full explanation of our recommended
                    solutions.
                  </li>
                  <hr />
                  <li>
                    No hard sales tactics only honest information based on your
                    homes needs.
                  </li>
                </ul>

                <p className="pricing-one__tag-line">
                  Because we know that it is not just the gutters we are
                  affecting but the beauty and the longevity of the home.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Quality </h2>
                <p className="pricing-one__name">
                  The best technicians in the business
                </p>
                <ul className="pricing-one__list list-unstyled">
                  <li>
                    With High View Construction, you know you are getting the
                    highest quality service at a reasonable price.
                  </li>
                </ul>

                <p className="pricing-one__tag-line">
                  No matter the weather, High View is here ready for any and all
                  your repair needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Clean </h2>
                <p className="pricing-one__name">
                  A full clean up and follow up after every job
                </p>
                <ul className="pricing-one__list list-unstyled">
                  <li>
                    We understand you work hard to keep your home looking nice,
                    we make sure to keep it that way.
                  </li>
                  <li>
                    Our technicians will always inspect your home before leaving
                    to ensure there is no remaining debris.
                  </li>
                </ul>

                <p className="pricing-one__tag-line">
                  We want to make sure you’re 100% satisfied, and we go the
                  extra mile to make your experience as enjoyable and
                  stress-free as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
