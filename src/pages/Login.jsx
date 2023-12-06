import React from "react";

import { ReactComponent as Logo } from "../assets/images/logo-devlinks-small.svg";
import { ReactComponent as Email_icon } from "../assets/images/icon-email.svg";
import { ReactComponent as Password_icon } from "../assets/images/icon-password.svg";
import "../styles/Login.styled.css";

const Login = () => {
  return (
    <div className="logo_page">
      <div className="logo_container">
        <Logo id="logo" />
        <h1 className="heading_m">devlinks</h1>
      </div>

      <div className="login_container">
        <h2 className="heading_m">Login</h2>
        <p className="body_m">
          Add your details below to get back into the app
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
            Password
          </label>
          <div className="login_password_input">
            <Password_icon className="icon" />
            <input type="password" placeholder="Enter your password" required />
          </div>

          <input
            type="submit"
            value="Login"
            className="btn_primary login_submit"
          />
        </form>

        <p>
          Don't have an account? <a href="">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
