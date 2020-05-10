import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export const Login = ({ login, isAuthenticated }) => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (x) =>
    setloginData({ ...loginData, [x.target.name]: x.target.value });

  const onSubmit = (x) => {
    x.preventDefault();
    login(email, password);
    console.log("successful login");
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign in</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Log in to an existing account
      </p>
      <form className="form" onSubmit={onSubmit}>
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
            minLength="8"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="login" />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const linkStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(linkStateToProps, { login })(Login);
