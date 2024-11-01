import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>H.E.L.M. (Hostel Environment & Living Management)</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/feedback">Submit Feedback</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
