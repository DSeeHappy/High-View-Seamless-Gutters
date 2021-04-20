import React from "react";
import Countdown from "react-countdown";

const CountdownKipso = () => {
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">Receive 5% off </h2>
              <p className="countdown-one__tag-line">
                Give the gift of 5% off to your family, friends, neighbors or
                co-workers.
              </p>
              <p className="countdown-one__text">
                Anyone can receive this 5% off discount, just submit your
                information and you can receive the 5% off for any of our
                services.
              </p>
              <hr />
              <p className="countdown-one__text">
               We provide free online estimates!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">
                  Get 5% off all our services
                </h2>
              </div>
              <form
                action="#"
                method="POST"
                className="become-teacher__form-content contact-form-validated"
              >
                <input type="text" placeholder="Your Name" name="name" />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="text" placeholder="Phone Number" name="phone" />
                <input type="text" placeholder="Comment" name="message" />
                <button
                  type="submit"
                  className="thm-btn become-teacher__form-btn"
                >
                  Submit for 5% off!
                </button>
              </form>
              <div className="result text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountdownKipso;
