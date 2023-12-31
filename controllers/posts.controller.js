// controllers/posts.controller.js

const PostService = require('../services/posts.services');

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
    if (!postId) {
      res.status(400).json({
        errorMessage: '조회하려는 게시글이 존재하지 않습니다.',
      });
    }
    res.status(200).json({ data: posts });
  };

  createPost = async (req, res, next) => {
    const userId = res.locals.user;
    console.log(userId);
    const { nickname, title, content } = req.body;
    if (!title) {
      res.status(400).json({
        errorMessage: '제목을 입력해주세요.',
      });
    }
    if (!content) {
      res.status(400).json({
        errorMessage: '내용을 입력해주세요.',
      });
    }

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(
      userId,
      nickname,
      title,
      content
    );

    res.status(201).json({ data: createPostData });
  };
  updatePost = async (req, res, next) => {
    const userId = res.locals.user;
    const { postId } = req.params;
    const { nickname, title, content, updatedAt } = req.body;

    const updatePostData = await this.postService.updatePost(
      postId,
      title,
      content
    );
    res.status(201).json({ data: updatePostData });
  };
  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    await this.postService.deletePost(postId);
    res.status(200).json({ success: '게시글이 삭제되었습니다.' });
  };
}

module.exports = PostsController;
