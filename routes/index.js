const express = require('express');
const router = express.Router();

const userRouter = require('./users.routes');
router.use('/users', userRouter);

const postsRouter = require('./posts.routes');
router.use('/post', postsRouter);

const commentsRouter = require('./comments.routes');
router.use('/comment', commentsRouter);
module.exports = router;
