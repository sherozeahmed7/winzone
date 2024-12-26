import React from "react";
import "../components/FooterStyle.css";
import whitelogo from "../assets/img/white_logo.png";
import { FaFacebook, FaInstagram, FaTiktok, FaRegNewspaper, FaTv } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footerEnd bg-secondary mt-5 text-light">
        <div className="container py-5">
          <div className="row">
            {/* Logo and About Section */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <img className="mb-3" src={whitelogo} width={150} alt="Winzone Logo" />
              <p className="footer-text">
                Winzone delivers reliable, unbiased news from across the globe,
                prioritizing truth, thorough reporting, and unwavering commitment
                to excellence.
              </p>
              <div className="social-icons mt-3">
                <span className="icon-container"><FaFacebook /></span>
                <span className="icon-container ms-2"><FaInstagram /></span>
                <span className="icon-container ms-2"><FaTiktok /></span>
              </div>
            </div>

            {/* Foundational Principles */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading">Foundational Principles</h5>
              <ul className="list-unstyled">
                <li><FaRegNewspaper className="me-2" /> Honest</li>
                <li><FaRegNewspaper className="me-2" /> Journalism</li>
                <li><FaRegNewspaper className="me-2" /> Bravery</li>
              </ul>
            </div>

            {/* Pages */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading">Pages</h5>
              <ul className="list-unstyled">
                <li><FaTv className="me-2" /> Terms And Conditions</li>
                <li><FaTv className="me-2" /> About</li>
                <li><FaTv className="me-2" /> Privacy Policy</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading">Contact Us</h5>
              <address>
                <IoLocation className="me-2" /> 123 University Avenue, Buffalo <br />
                State University
              </address>
            </div>
          </div>

          {/* Divider */}
          <hr className="footer-divider" />

          {/* Note */}
          <div className="text-center mt-4">
            <p className="footer-note">
              <strong>Note:</strong> This project is for educational purposes only, intended for
              <strong> Buffalo State University students.</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
