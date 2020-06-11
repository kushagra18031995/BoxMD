import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="nav-class navbar-light bg-danger">
      <ul className="nav-length">
        <li>
          {/* assigning route */}
          <Link style={navStyle} to="./Boxmd">
            BoxMD
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="./AboutUs">
            About Us
          </Link>
        </li>

        <li>
          <Link style={navStyle} to="./ContactUs">
            Contact
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="./Login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
