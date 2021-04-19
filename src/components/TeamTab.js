import React from "react";

const TeamTab = () => {
  return (
    <section className="team-tab">
      <div className="container">
        <div className="tab-content">
          <div
            className="tab-pane show active  animated fadeInUp"
            role="tabpanel"
            id="overview"
          >
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <div className="team-tab__content">
                    <div className="team-tab__top">
                      <div className="team-tab__left">
                        <h2 className="team-tab__title">Gilberto Sanchez </h2>
                        <p className="team-tab__designation">Owner</p>
                      </div>
                      <div className="team-tab__right">
                        <div className="team-tab__social">
                          <a href="#">
                            <i className="fab fa-facebook-square"></i>
                          </a>

                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="team-tab__text">
                      2018 was the year Gilberto Sanchez decided to start his
                      own business. With over 10 years of experience Gilberto
                      felt he could provide a better customer experience with
                    </p>

                    <a
                      href="tel:720-712-4815"
                      className="thm-btn team-tab__btn"
                    >
                      Call For Free Quote
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/assets/images/teacher-h3-1-1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div
            className="tab-pane  animated fadeInUp"
            role="tabpanel"
            id="curriculum"
          >
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <div className="team-tab__content">
                    <div className="team-tab__top">
                      <div className="team-tab__left">
                        <h2 className="team-tab__title">Sam Avila</h2>
                        <p className="team-tab__designation">Project Manager</p>
                      </div>
                      <div className="team-tab__right">
                        <div className="team-tab__social">
                          <a href="#">
                            <i className="fab fa-facebook-square"></i>
                          </a>

                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="team-tab__text"></p>

                    <a
                      href="tel:720-854-5683"
                      className="thm-btn team-tab__btn"
                    >
                      Call For Free Quote
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/assets/images/teacher-h3-1-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <ul
          className="team-tab__tab-navs list-unstyled nav nav-tabs"
          role="tablist"
        >
          <li>
            <a className="active" role="tab" data-toggle="tab" href="#overview">
              <img src="/assets/images/team-1-1.jpg" alt="" />
            </a>
          </li>
          <li>
            <a className="" role="tab" data-toggle="tab" href="#curriculum">
              <img src="/assets/images/team-1-2.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TeamTab;
