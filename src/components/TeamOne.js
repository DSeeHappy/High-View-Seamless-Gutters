import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import {Link} from "gatsby";
const TeamOne = () => {
  return (
    <section className="team-one team-one__become-teacher">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Meet the best <br />
            Gutter Pros
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/about/Gilberto-Sanchez">Gilberto Sanchez</Link>
                </h2>
                <p className="team-one__designation">Owner | Project Manager</p>
                <a href="tel:720-741-2300">
                  <p className="team-one__text">Office: 720 741-2300</p>
                </a>
                <a href="tel:720-741-2300">
                  <p className="team-one__text">Cell: 720 712-4815</p>
                </a>
                <hr/>
                <a href="mailto:gilbertosanchez@coloradogutter.com">
                  <p className="team-one__text">
                    GilbertoSanchez@ColoradoGutter.com
                  </p>
                </a>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team2} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/about/Sam-Avila">Sam Avila</Link>
                </h2>
                <p className="team-one__designation">Owner | Project Manager</p>
                <a href="tel:720-741-2300">
                  <p className="team-one__text">Office: 720 741-2300</p>
                </a>
                <a href="tel:720-741-2300">
                  <p className="team-one__text">Cell: 720 854-5683</p>
                </a>
                <hr/>
                <a href="mailto:samavila@coloradogutter.com">
                  <p className="team-one__text">SamAvila@ColoradoGutter.com</p>
                </a>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
