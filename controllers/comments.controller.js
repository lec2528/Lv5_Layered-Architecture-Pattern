const CommentsService = require('../services/comments.services');

class CommentsController {
  commentsService = new CommentsService();

  getComments = async (req, res, next) => {
    const comments = await this.commentsService.getComments();
    res.status(200).json({ comments: comments });
  };

  createComments = async (req, res, next) => {
    const userId = res.locals.user;
    const { postId } = req.params;
    console.log('userId', userId);
    console.log('postId', postId);
    const { nickname, content } = req.body;
    if (!postId) {
      res.status(412).json({
        errorMessage:
          '게시글이 존재하지 않거나 삭제되었기 때문에 댓글을 생성할 수 없습니다.',
      });
    }

    if (!content.length) {
      res.status(412).json({
        errorMessage: '댓글 내용을 입력해주세요',
      });
    }
    const createComments = await this.commentsService.createComments(
      nickname,
      content,
      postId,
      userId
    );

    res.status(200).json({ createComments: createComments });
  };

  updateComments = async (req, res, next) => {
    const userId = res.locals.user;
    const { postId } = req.params;
    const { content, updateAt } = req.body;
    const updateCommentsData = await this.commentsService.updateComments(
      userId,
      postId,
      content,
      updateAt
    );
    res.status(200).json({ updateCommentsData: updateCommentsData });
  };

  deleteComments = async (req, res, next) => {
    const { commentsId } = req.params;

    await this.deleteComments(commentsId);
    res.status(200).json({ success: '댓글이 삭제되었습니다.' });
  };
}
module.exports = CommentsController;
