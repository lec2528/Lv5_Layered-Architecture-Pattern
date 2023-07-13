const PostRepository = require('../repositories/posts.repository');

class PostService {
  postRepository = new PostRepository();

  findAllPost = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allPost = await this.postRepository.findAllPost();
    if (!allPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }
    // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allPost.map((post) => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };
    });
  };
  findOnePost = async (postId) => {
    const detailPost = await this.postRepository.findOnePost(postId);
    if (!detailPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }
    return {
      postId: detailPost.postId,
      nickname: detailPost.nickname,
      title: detailPost.title,
      createdAt: detailPost.createdAt,
      updatedAt: detailPost.updatedAt,
    };
  };

  createPost = async (nickname, password, title, content, userId, postId) => {
    if (!title) {
      throw new Error('게시글 제목을 입력해주세요.');
    }
    if (!content) {
      throw new Error('게시글 내용을 입력해주세요.');
    }
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createPostData = await this.postRepository.createPost(
      nickname,
      password,
      title,
      content,
      userId,
      postId
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      postId: createPostData.postId,
      nickname: createPostData.nickname,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    };
  };
  updatePost = async (postId, title, content, updatedAt) => {
    const findPost = await this.postRepository.findOnePost(postId);
    if (!findPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }

    if (!content) {
      throw new Error('수정할 내용을 입력해주세요');
    }
    await this.postRepository.updatePost(postId, title, content, updatedAt);

    const updatePostData = await this.postRepository.findOnePost(postId);
    return {
      postId: updatePostData.postId,
      nickname: updatePostData.nickname,
      title: updatePostData.title,
      content: updatePostData.content,
      updatedAt: updatePostData.updatedAt,
    };
  };

  deletePost = async (postId) => {
    const findPost = await this.postRepository.findOnePost(postId);
    if (!findPost) {
      throw new Error('존재하지 않는 게시글 입니다.');
    }
    await this.postRepository.deletePost(postId);
    return {
      postId: findPost.postId,
      nickname: findPost.nickname,
      title: findPost.title,
      content: findPost.content,
      updatedAt: findPost.updatedAt,
    };
  };
}

module.exports = PostService;
