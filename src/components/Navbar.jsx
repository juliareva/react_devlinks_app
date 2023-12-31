import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-devlinks-small.svg";
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";
import { ReactComponent as ProfileDetails } from "../assets/images/icon-profile-details-header.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <nav>
      <Link to="/" className="logo_container">
        <Logo id="logo" />
        <h1 className="heading_m">devlinks</h1>
      </Link>

      <div className="nav_links_container">
        <NavLink to="/" className="nav_link" >
          <LinkIcon /> <p className="heading_s">Links</p>
        </NavLink>

        <NavLink to="/profile" className="nav_link">
          <ProfileDetails /> <p className="heading_s">Profile Details</p>
        </NavLink>
      </div>

      <button className="btn_secondary">Preview</button>
    </nav>
  );
};

export default Navbar;
