const express = require('express');
const router = express.Router();
const userRouter = require('./users.routes');
const postsRouter = require('./posts.routes');
const commentsRouter = require('./comments.routes');

router.use('/user', userRouter);
router.use('/post', postsRouter);
router.use('/post', commentsRouter);
module.exports = router;
