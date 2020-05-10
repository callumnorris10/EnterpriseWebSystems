import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

export const Register = ({ setAlert, register, isAuthenticated }) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    verifypassword: "",
  });

  const { name, email, password, verifypassword } = registerData;

  const onChange = (x) =>
    setRegisterData({ ...registerData, [x.target.name]: x.target.value });

  const onSubmit = (x) => {
    x.preventDefault();
    if (verifypassword !== password) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
      console.log("Successfully added new user/onsubmit");
      //test registering a new user
      //   const newUser = {
      //     name,
      //     email,
      //     password,
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     };
      //     const body = JSON.stringify(newUser);
      //     const res = axios.post("/api/users", body, config);
      //     console.log(res.data);
      //   } catch (err) {
      //     console.error(err.repsonse);
      //   }
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Register a new account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            //minLength="8"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="verifypassword"
            value={verifypassword}
            onChange={onChange}
            //minLength="8"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const linkStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(linkStateToProps, { setAlert, register })(Register);
