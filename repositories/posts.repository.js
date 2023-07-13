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
  createPost = async (nickname, password, title, content, userId, postId) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await Posts.create({
      postId,
      nickname,
      password,
      title,
      content,
      userId,
    });

    return createPostData;
  };
  updatePost = async (postId, title, content) => {
    const updatePostData = await Posts.update(
      { title, content, updatedAt: new Date() },
      { where: { postId } }
    );
    return updatePostData;
  };

  deletePost = async (postId) => {
    const deletePosDate = await Posts.destroy({ where: { postId } });
    return deletePosDate;
  };
}

module.exports = PostRepository;
