const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
//@route    GET api/profile/me
//@         retrieve the current user's profile
//@access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for the user you have requested" });
    }
    res.json(profile);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
//@route    POST api/profile/
//@desc         create/update user profile
//@access   Private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills are required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      club,
      location,
      website,
      bio,
      skills,
      status,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;
    //Profile constructor
    const profileFields = {};
    profileFields.user = req.user.id;
    if (club) profileFields.club = club;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim());
    }

    //Social constructor section
    profileFields.social = {};
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update an existing profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        console.log("user successfully updated");
        return res.json(profile);
      }

      profile = new Profile(profileFields);
      await profile.save();
      console.log("user successfully created");
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    GET api/profile
//@desc       get all user profiles
//@access   public
router.get("/", (req, res) => {});

module.exports = router;
