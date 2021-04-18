import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../assets/images/high-view/img/HighViewBar2.png";
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
                <img
                  src={logo}
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
                <li className="current">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#none">Residential</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">Seamless Gutters</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gutter Guards</Link>
                    </li>
                    <li>
                      <Link to="/pricing">French Drains</Link>
                    </li>
                    <li>
                      <Link to="/faq">Fascia &amp; Soffit</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="courses.html">Commercial</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/course-details">Courses Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="teachers.html">About</a>
                </li>
                <li>
                  <a href="news.html">Portfolio</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">Financing</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">Service Area</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="header__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a href="#none">
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
