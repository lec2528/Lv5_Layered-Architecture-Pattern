const express = require('express');
const router = express.Router();
const userRouter = require('./users.routes');
const postsRouter = require('./posts.routes');
const commentsRouter = require('./comments.routes');
// const commentsRouter = require('./comments.routes');

router.use('/user', userRouter);
router.use('/post', postsRouter);
router.use('/comment', commentsRouter);
// router.use('/comment', commentsRouter);
module.exports = router;
