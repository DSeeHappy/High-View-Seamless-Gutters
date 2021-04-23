import React from "react";
import { Link } from "gatsby";

const ServicesBar = () => {
  return (
    <div className="topbar-one">
      <div className="container">
        <div className="topbar-one__left">
          <Link to="/services/Seamless-Gutters">Gutters</Link>
          <Link to="/services/Gutter-Guards">Gutter Guards</Link>
        </div>
        <div className="topbar-one__right">
          <Link to="/services/Fascia-Soffit">Fascia &amp; Soffit</Link>
          <Link to="/services/French-Drains">French Drains</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesBar;
