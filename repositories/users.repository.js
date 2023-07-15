const { Users } = require('../models');

class UsersRepository {
  createUsers = async (nickname, password, email, confirm) => {
    const createSignupUserDate = await Users.create({
      nickname,
      password,
      email,
      confirm,
    });
    return createSignupUserDate;
  };
  findByUsers = async (nickname) => {
    const loginUser = await Users.findOne({ where: { nickname } });
    return loginUser;
  };
}

module.exports = UsersRepository;
