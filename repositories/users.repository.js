const { Users } = require('../models');

class UsersRepository {
  createUsers = async (nickname, password, email, confirm, userId) => {
    const createSignupUserDate = await Users.create({
      nickname,
      password,
      email,
      confirm,
      userId,
    });
    return createSignupUserDate;
  };
  findByUsers = async (nickname, password) => {
    const loginUser = await Users.findOne({ whrer: { nickname } });
    return loginUser;
  };
}

module.exports = UsersRepository;
