const express = require("express");

const {
  getIndex,
  getPost,
  getMakePost,
  postMakePost,
  deletePost,
  postUpdatePost,
  getUpdatePost,
  getAllPosts,
  getCategory,
  getSearchResult,
  addComment,
  deleteComment,
  clickThumb,
} = require("../controllers/postController");

const postRouter = express.Router();

postRouter.route("/").get(getAllPosts);

postRouter.get("/:category([1-5]{1})", getCategory);

postRouter.get("/search", getSearchResult);

postRouter.route("/:id([0-9a-f]{24})").get(getPost).post(addComment);
postRouter
  .route("/:id([0-9a-f]{24})/edit")
  .get(getUpdatePost)
  .post(postUpdatePost);
postRouter.get("/:id([0-9a-f]{24})/delete", deletePost);

postRouter.route("/makePost").get(getMakePost).post(postMakePost);

postRouter.get("/deleteComment/:id([0-9a-f]{24})", deleteComment);

postRouter.get("/thumb/:id([0-9a-f]{24})", clickThumb);

module.exports = postRouter;
