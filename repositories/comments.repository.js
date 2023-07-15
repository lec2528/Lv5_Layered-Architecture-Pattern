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
  createComments = async (userId, postId, nickname, content) => {
    const comment = await Comments.create({
      userId,
      postId,
      nickname,
      content,
    });
    return comment;
  };
  updateComments = async (commentId, content) => {
    const comment = await Comments.findByPk(commentId);
    return await comment.update({ content }, { where: { commentId } });
  };
  deletecomment = async (commentId) => {
    return await Comments.destroy({ where: { commentId } });
  };
}
module.exports = CommentsRepository;
