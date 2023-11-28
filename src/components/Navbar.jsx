import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo-devlinks-small.svg";
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";
import { ReactComponent as ProfileDetails } from "../assets/images/icon-profile-details-header.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo /> <h1>devlinks</h1>
      </div>
      <div className="nav_links">
        <a href=""><LinkIcon /> Links</a>
        <a href=""><ProfileDetails /> Profile Details</a>
      </div>
      <div className="profile_details">

      </div>
      <button>Preview</button>
    </div>
  );
};

export default Navbar;
