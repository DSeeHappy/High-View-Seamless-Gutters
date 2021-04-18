import React from "react";
import footer1 from "../assets/images/footer-1-1.png";
import footer2 from "../assets/images/footer-1-2.png";
import footer3 from "../assets/images/footer-1-3.png";
import footer4 from "../assets/images/footer-1-4.png";
import footer5 from "../assets/images/footer-1-5.png";
import footer6 from "../assets/images/footer-1-6.png";
import { Link } from "gatsby"

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Contact Us</h2>

                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>Owner</h2>
                      <p>Gilberto Sanchez</p>
                      <a href="mailto:gilbertosancheza@coloradogutter.com">
                        <p>GilbertoSanchez@ColoradoGutter.com </p>
                      </a>
                      <a href="tel:720-712-4815">
                        {" "}
                        <p>(720) 712-4815 </p>
                      </a>
                    </li>
                    <li>
                      <h2>Project Manager</h2>
                      <p>Sam Avila</p>

                      <a href="mailto:samavila@coloradogutter.com">
                        <p>SamAvila@ColoradoGutter.com </p>
                      </a>
                      <a href="tel:720-854-5683">
                        <p>(720) 854 5683 </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/residential">
                          <a>Residential</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/commercial">
                          <a>Commercial</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <a>Blog</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <a>Faq</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    2018 was the year Gilberto Sanchez decided to start his own
                    business. With over 10 years of experience Gilberto felt he
                    could provide a better customer experience with High View
                    Construction.
                  </p>
                  <div className="footer-widget__btn-block">
                    <a href="tel:720-741-2300" className="thm-btn">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright 2021 by{" "}
              <a href="https://dseehappy.com">DSeeHappy.com</a>
            </p>

            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                className="scroll-to-target site-footer__scroll-top"
              >
                <i className="kipso-icon-top-arrow"></i>
              </div>

              <a href="https://www.facebook.com/HighViewSeamlessGutters">
                <i className="fab fa-facebook-square"></i>
              </a>

              <a href="https://www.instagram.com/HighViewSeamlessGutters/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
