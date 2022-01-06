const faker = require('faker');

class CategoriesService {
  constructor() {
    this.categories = [];
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productAdjective(),
      });
    }
  }

  create() {}

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id == id);
  }

  update() {}

  delete() {}
}

module.exports = CategoriesService;
