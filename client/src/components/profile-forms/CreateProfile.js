import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const CreateProfile = (props) => {
  const [registerData, setRegisterData] = useState({
    club: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });
  //makes the option to input social media fields a toggle
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    club,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = registerData;

  const onChange = (e) =>
    setRegisterData({ ...registerData, [x.target.name]: x.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Coaching Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Now add some information to your
        profile!
      </p>
      <small>* = denotes required field</small>
      <form className="form">
        <div className="form-group">
          <select name="status" value={status} onChange={(x) => onChange(x)}>
            <option value="0">* Select your professional level</option>
            <option value="Aspiring Coach">Aspiring Coach</option>
            <option value="Uncertified Youth Coach">
              Uncertified Youth Coach
            </option>
            <option value="Certified Youth Coach">Certified Youth Coach</option>
            <option value="Certified Coach">Certified Coach</option>
            <option value="Senior Certified Coach">
              Senior Certified Coach
            </option>
            <option value="Senior UEFA A or equivalent level Coach">
              Senior UEFA A or equivalent level Coach or Teacher
            </option>
            <option value="UEFA Pro License holder or equivalent">
              UEFA Pro License holder or equivalent
            </option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">What level of coach are you</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="club"
            name="club"
            value={club}
            onChange={onChange}
          />
          <small className="form-text">The club you work for</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own website or your clubs website
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">City/town</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">use comma separated values</small>
        </div>

        <div className="form-group">
          <textarea
            placeholder="A short bio about you"
            name="bio"
            value={bio}
            onChange={onChange}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick
            //asked to add spread operator
            {...() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add links to your social networks
          </button>
          <span>This section is optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="/dashboard">
              Go Back
            </a>
          </Fragment>
        )}
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
