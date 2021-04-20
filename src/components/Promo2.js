import React from "react";
import Countdown from "react-countdown";

const CountdownKipso = () => {
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">Refer your Neighbor! </h2>
              <p className="countdown-one__tag-line">
                Receive up to a $50 Gift Card for referring your neighbors,
                friends, family or co-workers.
              </p>
              <p className="countdown-one__text">
                If you've enjoyed the quality service we provide and would like
                to recommend our services to someone you know. Submit your
                referral and receive up to a $50 gift card, helping those you
                care about find a quality service provider they can trust.
              </p>
              <hr/>
              <p className="countdown-one__text">
               Promotional Gift Cards can range from $5 - $50 depending on the scope of the referral.
              </p>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">
                  Get a free Gift Card!
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
                  Submit Referral!
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
