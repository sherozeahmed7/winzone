import React from "react";
import whitelogo from "../assets/img/white_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoClose } from "react-icons/io5"; 
import "../components/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
      onClick={onClose}
    >
      {/* <div className="sidebar"> */}
      {/* Sidebar Content */}
      <div
        className="sidebar-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="sidebar-close-btn" onClick={onClose}>
          <IoClose />
        </button>

        {/* Logo */}
        <a className="bar-title-logo" href="#">
          <img src={whitelogo} width={200} alt="Winzone Logo" />
        </a>

        {/* Description */}
        <p>
          This year has been a whirlwind of drama and controversy in the world
          of celebrities. From unexpected breakups to shocking revelations.
        </p>

        {/* Divider */}
        <hr />

        {/* Contact Information */}
        <h6>Contact Us</h6>
        <div className="contact-info">
          <p>5792 Main Street, Williamsville, NY 14221</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <AiFillTikTok />
          </a>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
