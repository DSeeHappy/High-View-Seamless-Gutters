import React from "react";

const SubscribeOne = () => {
  return (
    <section className="mailchimp-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mailchimp-one__content">
              <div className="mailchimp-one__icon">
                <i className="kipso-icon-email"></i>
              </div>
              <h2 className="mailchimp-one__title">
                Sign up for our latest Newsletter <br />
                and Discounts
              </h2>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="my-auto">
              <form
                name="Newsletter Form V0.0.1"
                className="mailchimp-one__form mc-form"
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="bot-field"
                onSubmit="submit"
              >
                <input
                  type="text"
                  id="mc-email"
                  placeholder="Enter your email"
                />
                <button type="submit" className="thm-btn">
                  Subscribe
                </button>
              </form>
              <div className="mc-form__response"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubscribeOne;
