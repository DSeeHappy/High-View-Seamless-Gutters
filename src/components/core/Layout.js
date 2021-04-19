import React from "react";
import { Helmet } from "react-helmet";
import appleTouch from "../../assets/images/favicons/apple-touch-icon.png";
import fav32 from "../../assets/images/favicons/favicon-32x32.png";
import fav16 from "../../assets/images/favicons/favicon-16x16.png";
import fav192 from "../../assets/images/favicons/android-chrome-192x192.png";
import fav512 from "../../assets/images/favicons/android-chrome-512x512.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../../assets/plugins/kipso-icons/style.css";
import "../../assets/css/animate.min.css";
import "../../assets/scss/style.scss";
import "../../assets/css/responsive.css";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.pageTitle}</title>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={fav192}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={fav512}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="No matter the weather, High View is here ready for any and all your Seamless Gutter repair and cleaning needs.

"
        />
        <meta property="fb:app_id" content="270924647921219" />

        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://coloradogutter.com/" />
        <meta property="og:title" content="High View's Seamless Gutters" />
        <meta
          property="og:description"
          content="No matter the weather, High View is here ready for any and all your Seamless Gutter repair and cleaning needs.

"
        />
        <meta
          property="og:image"
          alt="High View's Seamless Gutters Denver CO Cleaning Installation Services"
          content="https://high-view-construction.s3-us-west-2.amazonaws.com/High-Views-Seamless-Gutters-LeafBlaster-Gutter-Guards-1200x628.png"
        />

        <meta
          property="og:image:alt"
          alt="High View's Seamless Gutters Denver CO Cleaning Installation Services"
          content="High View's Seamless Gutters Denver CO Cleaning Installation Services"
        />
        <meta
          property="business:contact_data:street_address"
          content="7868 pearl st"
        />
        <meta property="business:contact_data:locality" content="denver" />
        <meta property="business:contact_data:region" content="Colorado" />
        <meta property="business:contact_data:postal_code" content="80229" />
        <meta
          property="business:contact_data:country_name"
          content="United States"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coloradogutter.com/" />
        <meta property="twitter:title" content="High View's Seamless Gutters" />
        <meta
          property="twitter:description"
          content="No matter the weather, High View is here ready for any and all your Seamless Gutter repair and cleaning needs.

"
        />
        <meta
          property="twitter:image"
          alt="High View's Seamless Gutters Denver CO Cleaning Installation Services"
          content="https://high-view-construction.s3-us-west-2.amazonaws.com/High-Views-Seamless-Gutters-LeafBlaster-Gutter-Guards-1200x628.png"
        ></meta>
        <meta
          property="twitter:image:alt"
          content="High View's Seamless Gutters Denver CO Cleaning Installation Services"
        />
        <link rel="canonical" href="https://coloradogutter.com" />
      </Helmet>

      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
