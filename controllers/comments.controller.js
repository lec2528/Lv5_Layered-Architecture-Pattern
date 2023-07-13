const CommentService = require('../services/comments.services');

class CommentsController {
  commentService = new CommentService();

  getComments = async (req, res, next) => {};

  createComments = async (req, res, next) => {};
}
