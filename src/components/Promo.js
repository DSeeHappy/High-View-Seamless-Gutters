import React from "react";
import Countdown from "react-countdown";

const CountdownKipso = () => {
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">10% Discount</h2>
              <p className="countdown-one__tag-line">
                Military &amp; Senior Discount
              </p>
              <p className="countdown-one__text">
                In an effort to show our appreciation to the people that support
                and defend our country. High View is offering a 10% discount for
                all active duty and retired military and their family.
              </p>
              <p className="countdown-one__text">
                We also understand gutter maintenance can be a safety hazard. We
                would like to extend the 10% discount to seniors, to help avoid
                the hazards of getting on the roof. For customers aged 65+.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">
                  Sign up for our Military &amp; Senior Discount
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
                  Apply For It
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
