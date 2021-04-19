import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">About Me </h2>
                <p className="contact-info-one__text">
                  Co-Owner of High View's Seamless Gutters. Sam Avila dedicates
                  himself to high quality customer service.
                </p>
                <hr />
                <p className="contact-info-one__text">
                  Making sure you are always satisfied with the quality of our
                  services!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">Service Area</h2>
                <p className="contact-info-one__text"></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <a href="mailto:samavila@coloradogutter.com">
                  <p className="contact-info-one__text">
                    SamAvila@ColoradoGutter.com
                  </p>
                </a>
                <br />
                <a href="mailto:samavila@coloradogutter.com">
                  <p className="contact-info-one__text">
                    Office: (720) 741-2300
                  </p>
                </a>{" "}
                <br />
                <a href="mailto:samavila@coloradogutter.com">
                  <p className="contact-info-one__text">Cell: (720) 854-5683</p>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with me
          </h2>
          <form
            action="#"
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>
      <h2 className="contact-one__title text-center">
           While we are based in Denver, we also service up to Fort Collins and down to Colorado Springs
          </h2>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt1YYm3QUQIcR_6eQSTGDVMc&key=AIzaSyAeuKE-CjeAf5dYzDPR7iKfACs8I5HPDNk"
        className="google-map__contact"
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default Contact;
