import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = (isAuthenticated) => {
  //if already logged in, go to dashboard
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">CoachLink</h1>
          <p className="lead">
            Create a coaching profile, share your experiences and interact with
            other sports coaches.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const linkStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(linkStateToProps)(Landing);
