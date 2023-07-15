const PostRepository = require('../repositories/posts.repository');

class PostService {
  postRepository = new PostRepository();

  findAllPost = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allPost = await this.postRepository.findAllPost();
    if (!allPost) {
      throw new Error('조회 가능한 게시글이 없습니다.');
    }
    // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allPost.map((post) => {
      return post;
    });
  };
  findOnePost = async (postId) => {
    const detailPost = await this.postRepository.findOnePost(postId);
    if (!detailPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }
    return detailPost;
  };

  createPost = async (userId, nickname, title, content) => {
    // 저장소(Repository)에게 입력받은 데이터를 전달합니다.
    const createPostData = await this.postRepository.createPost(
      userId,
      nickname,
      title,
      content
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return createPostData;
  };
  updatePost = async (postId, title, content) => {
    const findPost = await this.postRepository.findOnePost(postId);
    if (!findPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }

    if (!content) {
      throw new Error('수정할 내용을 입력해주세요');
    }
    return await this.postRepository.updatePost(commentId, title, content);
  };

  deletePost = async (postId) => {
    const findPost = await this.postRepository.findOnePost(postId);
    if (!findPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }
    await this.postRepository.deletePost(postId);
    return;
  };
}

module.exports = PostService;
