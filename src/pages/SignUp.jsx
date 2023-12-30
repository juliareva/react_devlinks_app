import React from "react";

import { ReactComponent as Logo } from "../assets/images/logo-devlinks-small.svg";
import { ReactComponent as Email_icon } from "../assets/images/icon-email.svg";
import { ReactComponent as Password_icon } from "../assets/images/icon-password.svg";
import "../styles/Login.styled.css";

const Signup = () => {
  return (
    <div className="logo_page">
      <div className="logo_container">
        <Logo id="logo" />
        <h1 className="heading_m">devlinks</h1>
      </div>

      <div className="login_container">
        <h2 className="heading_m">Create account</h2>
        <p className="body_m">Let’s get you started sharing your links!
        </p>

        <form className="login_form_wrapper">
          <label for="email" className="body_s">
            Email address
          </label>
          <div className="login_email_input">
            <Email_icon className="icon" />
            <input type="email" placeholder="e.g. alex@email.com" required />
          </div>

          <label for="password" className="body_s">
            Create password
          </label>
          <div className="login_password_input">
            <Password_icon className="icon" />
            <input type="password" placeholder="At least 8 characters" required />
          </div>

          <label for="password" className="body_s">
            Confirm password
          </label>
          <div className="login_password_input">
            <Password_icon className="icon" />
            <input type="password" placeholder="At least 8 characters" required />
          </div>

          <input
            type="submit"
            value="Create new account"
            className="btn_primary login_submit"
          />
        </form>

        <p className="text_center">
        Already have an account? <a href="">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;