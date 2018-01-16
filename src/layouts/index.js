import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import "./all.sass";
import "./fa.css";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="Scan Health Plan"
              style={{ width: "160px", maxHeight: "160px" }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

const BottomNavbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item " to="/about">
          <span className="is-size-4 has-text-weight-bold">About</span>
        </Link>
        <Link className="navbar-item" to="/news">
          <span className="is-size-4 has-text-weight-bold">News</span>
        </Link>
      </div>
    </div>
  </nav>
);
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Scan Health" />
    <Navbar />
    <BottomNavbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
