import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const PageHeader = (props) => {
  return (
    <div className="inner-banner" style={{ display: "grid"  }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          minHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../assets/images/high-view/img/High-Views-Seamless-Gutters-LeafBlaster-Gutter-Guard-1024x368.png"
        }
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
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <a href="#none">{props.section}</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">{props.title}</h2>
        </div>{" "}
      </div>
    </div>
  );
};

export default PageHeader;
