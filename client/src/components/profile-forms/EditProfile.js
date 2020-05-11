import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";
const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
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

  useEffect(() => {
    getCurrentProfile();
    setRegisterData({
      club: loading || !profile.club ? "" : profile.club,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      //join needed for skills because they are a list of comma separated values
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      status: loading || !profile.status ? "" : profile.status,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
    });
  }, [loading]);

  const {
    club,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = registerData;

  const onChange = (x) =>
    setRegisterData({ ...registerData, [x.target.name]: x.target.value });

  const onSubmit = (x) => {
    x.preventDefault();
    createProfile(registerData, history, true);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Coaching Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Now add some information to your
        profile!
      </p>
      <small>* = denotes required field</small>
      <form className="form" onSubmit={(x) => onSubmit(x)}>
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
            <Link className="btn btn-light my-1" href="/dashboard">
              Go Back
            </Link>
          </Fragment>
        )}
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const linkStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(linkStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
