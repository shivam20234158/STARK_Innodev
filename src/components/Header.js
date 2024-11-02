import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/Designer_logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="home_link">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
          <h1>
            <Link to="/">H.E.L.M. (Hostel Environment & Living Management)</Link>
          </h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/feedback">Submit Feedback</Link>
          <Link to="/admin">Admin Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
