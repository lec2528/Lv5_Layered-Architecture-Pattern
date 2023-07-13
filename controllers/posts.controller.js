// controllers/posts.controller.js

const PostService = require('../services/posts.services');
const middleware = require('../Middleware/loginmiddleware');

// Post의 컨트롤러(Controller)역할을 하는 클래스
class PostsController {
  postService = new PostService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getPosts = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const posts = await this.postService.findAllPost();

    res.status(200).json({ data: posts });
  };

  getPostById = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const { postId } = req.params;
    const posts = await this.postService.findOnePost(postId);

    res.status(200).json({ data: posts });
  };

  createPost = async (req, res, next) => {
    const userId = res.locals.user;
    const { postId } = req.params;
    console.log('createPostuserId', userId);
    console.log('createPostpostId', postId);
    const { nickname, password, title, content } = req.body;

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(
      nickname,
      password,
      title,
      content,
      userId,
      postId
    );

    res.status(201).json({ data: createPostData });
  };
  updatePost = async (req, res, next) => {
    const { postId } = req.params;
    console.log(postId);
    const { title, content, updatedAt } = req.body;

    const updatePostData = await this.postService.updatePost(
      postId,
      title,
      content,
      updatedAt
    );
    res.status(201).json({ data: updatePostData });
  };
  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const deletePostData = await this.postService.deletePost(postId);
    res.status(200).json({ data: deletePostData });
  };
}

module.exports = PostsController;
