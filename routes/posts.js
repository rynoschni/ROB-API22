var express = require("express");
var router = express.Router();
const { Posts } = require("../models");

/* Get posts */
router.get("/", async function (req, res, next) {
  const posts = await Posts.findAll();
  res.json(posts);
});

//Create Post
router.post("/new", async (req, res, next) => {
  const { title, postContent, userID} = req.body;
  const post =  await Posts.create({
    title: title,
    postContent: postContent,
    userID: userID,
  },);
  res.json(post)
});

module.exports = router;
