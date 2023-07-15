const UsersRepository = require('../repositories/users.repository');
const jwt = require('jsonwebtoken');

class UsersService {
  usersRepository = new UsersRepository();

  createUsers = async (nickname, password, email, confirm) => {
    const createSignupUserDate = await this.usersRepository.createUsers(
      nickname,
      password,
      email,
      confirm
    );

    // if(createSignupUserDate){

    // }
    return {
      nickname: createSignupUserDate.nickname,
      password: createSignupUserDate.password,
      email: createSignupUserDate.email,
      confirm: createSignupUserDate.confirm,
    };
  };
  doLogin = async (nickname, password) => {
    const user = await this.usersRepository.findByUsers(nickname, password);
    if (!user) {
      // 로그인 실패
      throw new Error('아이디 또는 비밀번호를 확인해주세요');
    }
    // 토큰을 생성합니다.
    const token = jwt.sign({ userId: user.userId }, 'custom-secret-key');
    // 토큰을 반환합니다
    return { user, token };
  };
}
module.exports = UsersService;
