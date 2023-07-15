//controllers\users.controller.js
const UserService = require('../services/users.services');

class UsersController {
  userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  signupUsers = async (req, res, next) => {
    const { nickname, password, email, confirm } = req.body;
    // if (nickname) {
    //   res.status(400).json({
    //     errorMessage:
    //       '이미 존재하는 닉네임 입니다. 다른 닉네임을 입력해주세요.',
    //   });
    // }
    // if (email) {
    //   res.status(400).json({
    //     errorMessage:
    //       '이미 존재하는 이메일 입니다. 다른 이메일을 입력해주세요.',
    //   });
    // }
    if (password !== confirm) {
      res.status(412).json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
    }
    // 서비스 계층에 구현된 signupUsers 로직을 실행합니다.
    const users = await this.userService.createUsers(
      nickname,
      password,
      email,
      confirm
    );
    res.status(200).json({ data: users });
  };

  loginUsers = async (req, res, next) => {
    const { nickname, password } = req.body;

    const token = await this.userService.doLogin(nickname, password);
    res.cookie('Authorization', `Bearer ${token.token}`);
    res.status(200).json({
      token,
      success: `로그인 완료`,
    });
  };
}
module.exports = UsersController;
