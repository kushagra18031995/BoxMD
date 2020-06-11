import React from "react";
import "../App.css";
function BottomNav() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-danger">
      <div className="navbar-brand  ">
        <a
          href="https://www.instagram.com/boxmd20/"
          className="text-white text-size"
        >
          Instagram
        </a>
      </div>
      <div className="navbar-brand">
        <a
          href="https://www.facebook.com/boxMD/"
          className="text-white text-size"
        >
          Facebook
        </a>
      </div>
      <div className="navbar-brand">
        <a
          href="https://www.linkedin.com/company/boxmd/"
          className="text-white text-size"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default BottomNav;
