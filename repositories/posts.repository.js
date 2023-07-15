// repositories/posts.repository.js

const { Posts } = require('../models');

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const posts = await Posts.findAll();

    return posts;
  };

  findOnePost = async (postId) => {
    const detailPost = await Posts.findOne({ where: { postId } });
    console.log(detailPost);
    return detailPost;
  };
  createPost = async (userId, nickname, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await Posts.create({
      userId,
      nickname,
      title,
      content,
    });

    return createPostData;
  };
  updatePost = async (postId, title, content) => {
    const post = await Posts.findByPk(postId);
    return await post.update({ title, content }, { where: { postId } });
  };

  deletePost = async (postId) => {
    const deletePosDate = await Posts.destroy({ where: { postId } });
    return deletePosDate;
  };
}

module.exports = PostRepository;
