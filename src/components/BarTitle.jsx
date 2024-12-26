import React, { useState } from "react";
import Sidebar from "./Sidebar";
import winzone from "../assets/img/winzone.png";
import "../components/BarTitleStyle.css";

const BarTitle = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bar-title-container">
      <div className="container">
        <nav className="bar-title-navbar d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a className="bar-title-logo" href="#">
            <img src={winzone} width={200} alt="Winzone Logo" />
          </a>

          {/* Educational Message */}
          <div className="bar-title-message d-none d-md-block">
            <h6>
              This project is for educational purposes only, intended for
              Buffalo State University students.
            </h6>
          </div>

          {/* Toggler Button */}
          <button
            className="bar-title-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <span className="bar-title-toggler-icon"></span>
          </button>
        </nav>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default BarTitle;
