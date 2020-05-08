const express = require("express");
const router = express.Router();

//@route    GET api/posts
//@         description test route for user
//@access   Public
router.get("/", (req, res) => res.send("this is the posts route"));

module.exports = router;
