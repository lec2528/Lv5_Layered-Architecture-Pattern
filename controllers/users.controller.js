const UserService = require('../services/users.services');

class UsersController {
  userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  signupUsers = async (req, res, next) => {
    const { nickname, password, email, confirm, userId } = req.body;
    // 서비스 계층에 구현된 signupUsers 로직을 실행합니다.
    const users = await this.userService.createUsers(
      nickname,
      password,
      email,
      confirm,
      userId
    );
    res.status(200).json({ data: users });
  };

  loginUsers = async (req, res, next) => {
    const { nickname, password } = req.body;
    const token = await this.userService.doLogin(nickname, password);
    res.cookie('Authorization', `Bearer ${token}`);
    res.status(200).json({
      token,
      success: `로그인 완료`,
    });
  };
}
module.exports = UsersController;
