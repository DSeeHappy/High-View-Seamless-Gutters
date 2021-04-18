import React from "react";

const ResidentialCTA = () => {
  return (
    <section className="become-teacher">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="become-teacher__content">
              <h2 className="become-teacher__title">
                High Quality Residential Services
              </h2>
              <p className="become-teacher__text">
                A quality technican can make the difference in taking clear
                steps to taking care of your home.
              </p>
              <h2 className="become-teacher__subtitle">
                High View's Seamless Gutters prepare your home for Colorado's
                weather
              </h2>
              <p className="become-teacher__text">
                Our Seamless Gutter Professionals understand that gutters are an
                important preventative measure, rainwater can slowly erode the
                value of your home.
              </p>
              <hr />
              <p className="become-teacher__text">
                High View's Seamless Gutters is the clear choice to keeping your
                house a home.
              </p>
              <br />
              <p className="become-teacher__text">
                From a small drip of water to a large overhang of snow, stray
                water overtime can wear on the foundation of your home.
              </p>
              <h2 className="become-teacher__subtitle">
                That’s why we take the care of your home very seriously.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">Free Quote</h2>
              </div>
              <form
                name="Residential Contact v1.2"
                className="become-teacher__form-content contact-form-validated"
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="bot-field"
                onSubmit="submit"
              >
                <div hidden>
                  <input name="bot-field" />
                </div>
                <input
                  type="hidden"
                  name="form-name"
                  value="Residential Contact v1.2"
                />
                <input type="text" placeholder="Your Name" name="name" />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="text" placeholder="Phone Number" name="phone" />
                <input
                  type="text"
                  placeholder="Property Address"
                  name="address"
                />
                <input type="text" placeholder="City" name="city" />
                <input type="text" placeholder="State" name="state" />
                <input type="text" placeholder="Zip Code" name="zipCode" />
                <input type="text" placeholder="Service(s) Requested" name="service" />
                <input type="text" placeholder="Comment" name="message" />

                <button
                  type="submit"
                  className="thm-btn become-teacher__form-btn"
                >
                  Submit
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

export default ResidentialCTA;
