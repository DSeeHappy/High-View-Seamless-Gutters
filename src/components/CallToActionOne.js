import React from "react";
import ctabg1 from "../assets/images/high-view/img/largeroofA.png";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const CallToActionOne = () => {
  return (
    <div className="cta-one cta-one__home-one" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={2 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../assets/images/high-view/img/largeroofA.png"}
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
          backgroundColor: "rgba(241,97,1,.8)",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className="container">
          <h2 className="cta-one__title">At High View's Seamless Gutters</h2>
          <br />
          <h2 className="cta-one__title">
            We pride ourselves on masterful installation.
          </h2>
          <hr />
          <div className="cta-one__btn-block">
            <a
              href="https://www.honeybook.com/widget/high_views_seamless_gutters_181969/cf_id/60862db0c4c5061e9af930c8"
              target="__blank"
              className="thm-btn cta-one__btn"
            >
            Free Estimate!
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CallToActionOne;
