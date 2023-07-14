const { Comments, Posts } = require('../models');

class CommentsRepository {
  findByCommentsToPost = async () => {
    const comment = await Comments.findAll({});
    return comment;
  };
  findOnePost = async (postId) => {
    const detailPost = await Posts.findOne({ where: { postId } });
    console.log(detailPost);
    return detailPost;
  };
  createComments = async (postId, userId, nickname, content) => {
    const comment = await Comments.create({
      postId,
      userId,
      nickname,
      content,
    });
    return comment;
  };
}
module.exports = CommentsRepository;
