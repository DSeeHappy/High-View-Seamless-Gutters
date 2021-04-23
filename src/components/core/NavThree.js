import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import logo from "../../assets/images/high-view/img/High-View-Logo-White.png";
class NavThree extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };
  render() {
    return (
      <header className="site-header site-header__home-three ">
        <div className="topbar-one">
          <div className="container">
            <div className="topbar-one__left">
              <a href="mailto:sales@coloradogutter.com">
                sales@coloradogutter.com
              </a>
              <a href="tel:720-741-2300">(720) 741-2300</a>
            </div>
            <div className="topbar-one__right">
              <a href="#none">Login</a>
              <a href="#none">Register</a>
            </div>
          </div>
        </div>
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <StaticImage
                  src="../../assets/images/high-view/img/High-View-Logo-White.png"
                  placeholder="tracedSVG"
                  className="main-logo"
                  width="128"
                  alt="High View's Seamless Gutters Denver Colorado Logo"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li>
                  <Link to="/services">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/services/Seamless-Gutters">
                        Seamless Gutters
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/Gutter-Guards">Gutter Guards</Link>
                    </li>
                    <li>
                      <Link to="/services/French-Drains">French Drains</Link>
                    </li>
                    <li>
                      <Link to="/services/Fascia-Soffit">
                        Fascia &amp; Soffit
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <Link to="/residential-services">Residential</Link>
                </li>
                <li>
                  <Link to="/commercial-services">Commercial</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about/Gilberto-Sanchez">Gilberto Sanchez</Link>
                    </li>
                    <li>
                      <Link to="/about/Sam-Avila">Sam Avila</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/gallery">Portfolio</Link>
                  <ul className="sub-menu">
                    <li>
                      <a
                        target="__blank"
                        href="https://www.instagram.com/HighViewSeamlessGutters/"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="__blank"
                        href="https://www.facebook.com/HighViewSeamlessGutters"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/financing">Financing</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/financing/GreenSky-6-Months-No-Interest-Financing">
                        6-Months No-Interest Finanacing
                      </Link>
                    </li>
                    <li>
                      <Link to="/financing/GreenSky-12-Months-No-Interest-Financing">
                        12-Months No-Interest Finanacing
                      </Link>
                    </li>
                    <li>
                      <Link to="/financing/GreenSky-138-Months-Extended-Financing">
                        138-Months Extended Finanacing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/service-area">Service Area</Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="header__social">
                <a href="https://twitter.com/HighViewGutters">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/HighViewSeamlessGutters">
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a href="https://www.instagram.com/HighViewSeamlessGutters/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavThree;
