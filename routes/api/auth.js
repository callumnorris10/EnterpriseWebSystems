const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@         description test route for user
//@access   Public
router.get("/", (req, res) => res.send("this is the auth route"));

module.exports = router;
