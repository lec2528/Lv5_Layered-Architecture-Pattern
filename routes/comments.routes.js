const express = require('express');
const router = express.Router();

const CommentsController = require('../controllers/comments.controller.js');
const commentsController = new CommentsController();
const middleware = require('../Middleware/loginmiddleware');

router.get('/:postId/comment', commentsController.getComments);
router.post('/:postId/comment', middleware, commentsController.createComments);
router.put(
  '/:postId/comment/:commentId',
  middleware,
  commentsController.updateComments
);
router.delete(
  '/:postId/comment/:commentId',
  middleware,
  commentsController.deleteComments
);
module.exports = router;
