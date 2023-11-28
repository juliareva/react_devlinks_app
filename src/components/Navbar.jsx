import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-devlinks-small.svg";
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";
import { ReactComponent as ProfileDetails } from "../assets/images/icon-profile-details-header.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <Link to="/">
        <Logo /> <h1>devlinks</h1></Link>
      </div>
      <div className="nav_links">
        <ul>
            <li><Link to="/"><LinkIcon /> Links</Link></li>
            <li><Link to="/profile"><ProfileDetails /> Profile Details</Link></li>
        </ul>
       
      </div>
      <div className="profile_details">

      </div>
      <button>Preview</button>
    </div>
  );
};

export default Navbar;
