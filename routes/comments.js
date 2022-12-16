var express = require("express");
var router = express.Router();
const { Comments } = require("../models");

/* Get all comments */
router.get("/", async function (req, res, next) {
  const comments = await Comments.findAll();
  res.json(comments);
});

/* Get comments for specific posts */
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  const comments = await Comments.findAll({where: {postID: id}});
  res.json(comments);
});

//Create Comment
router.post("/new", async (req, res, next) => {
  const { userID, postID, commentText  } = req.body;
  const comment = await Comments.create({
    commentText : commentText,
    postID: postID,
    userID: userID,
  });
  res.json(comment);
});

module.exports = router;
