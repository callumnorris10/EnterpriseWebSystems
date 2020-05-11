import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-edit text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-passport text-primary" /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-university text-primary" /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
