import React from "react";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from "gatsby";

const CallToActionFive = () => {
  return (
    <div className="banner-wrapper" style={{ display: "grid" }}>
    {/* You can use a GatsbyImage component if the image is dynamic */}
    <StaticImage
      style={{
        gridArea: "1/1",
        // You can set a maximum height for the image, if you wish.
        minHeight: 600,
      }}
      loading="eager"
      layout="fullWidth"
      aspectRatio={2 / 1}
      // You can optionally force an aspect ratio for the generated image
      // This is a presentational image, so the alt should be an empty string
      alt="High View's Seamless Gutters Denver CO Quality Seamless Gutters "
      src={"../assets/images/high-view/img/High-Views-Seamless-Gutters-Denver-CO-Leafs-on-Gutters-1920x1280.png"}
      formats={["auto", "webp", "avif"]}
    />
    <div
      style={{
        // By using the same grid area for both, they are stacked on top of each other
        gridArea: "1/1",
        position: "relative",
        // This centers the other elements inside the hero component
        placeItems: "center",
        display: "grid",
        backgroundColor:"rgba(1, 34, 55, 0.9)"

      }}
    >
      {/* Any content here will be centered in the component */}
      <div className="banner-one__slide banner-one__slide-one">

     
        <div className="container">
          <div className="row no-gutters">
            <div className="col-xl-12">
              <h3 className="banner-one__title banner-one__light-color">
                Let our Gutter Pro's <br /> take care of your gutters
              </h3>
              <p className="banner-one__tag-line">
                Preventative maintenance avoids larger problems down the line
              </p>

              <Link to="/gallery" className="thm-btn banner-one__btn">
                Check out our Previous Work!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-one__cta">
      <div className="banner-one__cta-icon">
      <i class="fas fa-soap"></i>
      </div>
      <div className="banner-one__cta-title">
        <h3 className="banner-one__cta-text">
          <Link to="/financing">
            Sign up for seasonal cleaning!
          </Link>
        </h3>
      </div>
      <div className="banner-one__cta-link">
        <Link to="/financing">
          <i className="kipso-icon-right-arrow"></i>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default CallToActionFive;
