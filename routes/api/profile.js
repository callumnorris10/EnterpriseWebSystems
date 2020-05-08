const express = require("express");
const router = express.Router();

//@route    GET api/profile
//@         description test route for user
//@access   Public
router.get("/", (req, res) => res.send("this is the profile route"));

module.exports = router;
