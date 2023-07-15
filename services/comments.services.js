const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
  commentsRepository = new CommentsRepository();

  getComments = async () => {
    const comments = await this.commentsRepository.findByCommentsToPost();
    if (!comments) {
      throw new Error('조회 가능한 댓글 없습니다.');
    }

    comments.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return comments.map((comment) => {
      return {
        userId: comment.userId,
        postId: comment.postId,
        nickname: comment.nickname,
        title: comment.title,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
      };
    });
  };

  createComments = async (userId, postId, nickname, content) => {
    const createCommentsData = await this.commentsRepository.createComments(
      userId,
      postId,
      nickname,
      content
    );
    // await this.postRepository.findOnePost(postId);
    return createCommentsData;
  };
  updateComments = async (commentId, content) => {
    // const findComment = await this.commentsRepository.updateComment({
    //   commentId,content
    // });

    // if (!findComment) {
    //   throw new Error('존재하지 않는 게시글 입니다.');
    // }

    // if (!findComment) {
    //   throw new Error('수정할 내용을 입력해주세요');
    // }
    return await this.commentsRepository.updateComments(commentId, content);
  };
  deleteComments = async (commentId) => {
    // const findPost = await this.postRepository.findOnePost(commentId);
    await this.commentsRepository.deletecomment(commentId);
    return;
  };
}
module.exports = CommentsService;
