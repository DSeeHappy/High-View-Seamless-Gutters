import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/course-1-1.jpg";

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to="/services/Seamless-Gutters" className="course-one__category">
                  Repair, Installation, Cleaning
                </Link>

                <h2 className="course-one__title">
                  <Link to="/services/Seamless-Gutters">5" &amp; 6" Seamless Gutters</Link>
                </h2>

                <div className="course-one__meta">
                  <Link to="/services/Seamless-Gutters">
                    <i className="far fa-clock"></i> fast turnaround
                  </Link>
                  
                  <Link to="/Free-Online-Estimates">Free Online Estimates</Link>
                </div>
                <Link to="/services/Seamless-Gutters" className="course-one__link">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to="/services/Fascia-Soffit" className="course-one__category">
                  Repair, Installation, Cleaning
                </Link>

                <h2 className="course-one__title">
                  <Link to="/services/Fascia-Soffit">Fascia &amp; Soffit</Link>
                </h2>

                <div className="course-one__meta">
                  <Link to="/services/Fascia-Soffit">
                    <i className="far fa-clock"></i> fast turnaround
                  </Link>
                  
                  <Link to="/Free-Online-Estimates">Free Online Estimates</Link>
                </div>
                <Link to="/services/Fascia-Soffit" className="course-one__link">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to="/services/Gutter-Guards" className="course-one__category">
                  Repair, Installation, Cleaning
                </Link>

                <h2 className="course-one__title">
                  <Link to="/services/Gutter-Guards">5" &amp; 6" Gutter Guards</Link>
                </h2>

                <div className="course-one__meta">
                  <Link to="/services/Gutter-Guards">
                    <i className="far fa-clock"></i> fast turnaround
                  </Link>
                  
                  <Link to="/Free-Online-Estimates">Free Online Estimates</Link>
                </div>
                <Link to="/services/Gutter-Guards" className="course-one__link">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to="/services/French-Drains" className="course-one__category">
                  Repair, Installation, Cleaning
                </Link>

                <h2 className="course-one__title">
                  <Link to="/services/French-Drains">French Drains</Link>
                </h2>

                <div className="course-one__meta">
                  <Link to="/services/French-Drains">
                    <i className="far fa-clock"></i>fast turnaround
                  </Link>
                  
                  <Link to="/Free-Online-Estimates">Free Online Estimates</Link>
                </div>
                <Link to="/services/French-Drains" className="course-one__link">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
