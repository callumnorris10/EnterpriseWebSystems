const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User.js");

//@route    POST api/users
//@         registration link for new user
//@access   Public
router.post(
  "/",
  [
    check("name", "Name is required for registration").not().isEmpty(),
    check("email", "enter a valid email").isEmail(),
    check(
      "password",
      "password isn't long enough, please make your passwords at least 8 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      //check if the user exists
      //get users gravatar
      //encrypt password
      //return json web token
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    res.send("this is the user route");
  }
);

module.exports = router;
