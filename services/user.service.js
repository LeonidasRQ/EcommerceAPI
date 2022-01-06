const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
      });
    }
  }

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id == id);
  }

  update() {}

  delete() {}
}

module.exports = UsersService;
