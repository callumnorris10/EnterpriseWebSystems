import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginData, setloginData] = useState({
    name: "",
    email: "",
  });

  const { email, password } = loginData;

  const onChange = (x) =>
    setloginData({ ...loginData, [x.target.name]: x.target.value });

  const onSubmit = (x) => {
    x.preventDefault();
    console.log("successful login");
  };

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

export default Login;
