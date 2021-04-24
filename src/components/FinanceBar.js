import React from "react";
import { Link } from "gatsby";

const FinanceBar = () => {
  return (
    <div className="topbar-one">
      <div className="container">
        <div className="topbar-one__left">
          <Link to="/financing/GreenSky-6-Months-No-Interest-Financing">6-Months Financing</Link>
          <Link to="/financing/GreenSky-12-Months-No-Interest-Financing">12-Months Financing</Link>
        </div>
        <div className="topbar-one__right">
          <Link to="/financing/GreenSky-138-Months-Extended-Financing">138-Months Extended Financing</Link>
        </div>
      </div>
    </div>
  );
};

export default FinanceBar;
