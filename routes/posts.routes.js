// routes/posts.routes.js

const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller.js');
const postsController = new PostsController();

const middleware = require('../Middleware/loginmiddleware');

router.get('/', postsController.getPosts);
router.get('/:postId', postsController.getPostById);
router.post('/', middleware, postsController.createPost);
router.put('/:postId', middleware, postsController.updatePost);
router.delete('/:postId', middleware, postsController.deletePost);
module.exports = router;
