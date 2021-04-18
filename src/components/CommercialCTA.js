import React from "react";

const CommercialCTA = () => {
  return (
    <section className="become-teacher">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="become-teacher__content">
              <h2 className="become-teacher__title">
                High Quality Commercial Services
              </h2>
              <p className="become-teacher__text">
                Ensure quality services every time. Professional technicians
                always ready for new construction to basic maintenance calls
              </p>
              <h2 className="become-teacher__subtitle">
                High View Construction is an industry leader
              </h2>
              <p className="become-teacher__text">
                in serving property managers, facility managers and maintenance
                managers with responsive, high-quality commercial installation
                and repair services. We know that the safety and comfort of
                tenants, visitors, building staff and equipment are at stake
                when the repairs are needed for old, damaged, or leaking
                buildings.
              </p>
              <h2 className="become-teacher__subtitle">
                That’s why we take our commercial work so seriously.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">Free Quote</h2>
              </div>
              <form
                name="Commercial Contact v1.2"
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
                  value="Commercial Contact v1.2"
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

export default CommercialCTA;
