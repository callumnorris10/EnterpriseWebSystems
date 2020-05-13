import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [registerData, setRegisterData] = useState({
    club: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    club,
    title,
    location,
    from,
    to,
    current,
    description,
  } = registerData;

  const onChange = (x) =>
    setRegisterData({ ...registerData, [x.target.name]: x.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-chalkboard" /> Add any coaching positions or
        expirience you have had in the past
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(x) => {
          x.preventDefault();
          addExperience(registerData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={(x) => onChange(x)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* club"
            name="club"
            value={club}
            onChange={(x) => onChange(x)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(x) => onChange(x)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(x) => onChange(x)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setRegisterData({ ...registerData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(x) => onChange(x)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(x) => onChange(x)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};
AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};
export default connect(null, { addExperience })(withRouter(AddExperience));
