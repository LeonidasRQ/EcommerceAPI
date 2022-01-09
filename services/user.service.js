const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  create() {}

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  findOne() {}

  update() {}

  delete() {}
}

module.exports = UserService;
