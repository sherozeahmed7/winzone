import React from "react";
import "../components/NavbarStyle.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar navbar navbar-expand-lg">
        <div className="container-fluid container-lg ms-lg-5 mx-sm-2 mx-xl-auto">
          <div className="icon-social d-flex mt-0 pt-0 ">
            <span className="">
              <FaFacebookF />
            </span>
            <span className="icon-media">
              <FaInstagram />
            </span>
            <span className="icon-media">
              <FaTiktok />
            </span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-icons  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav   mt-xl-0 mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Authors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Countries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link rounded-pill dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Term And Conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mb-2 mb-lg-0 ">
                <a className="nav-link active rounded-pill" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <span
                className="d-none d-lg-block "
                style={{ marginTop: "8px", padding: "0px 30px 0px 30px" }}
              >
                //
              </span>

              <button type="button" className="btn btnsub mx-lg-auto">
                Subscribe Now{" "}
                <span style={{ paddingRight: "px" }}>
                  <FaArrowRightLong />
                </span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
