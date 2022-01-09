const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService {
  constructor() {}

  async create(data) {}

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {}

  async update(id, changes) {}

  async delete(id) {}
}

module.exports = ProductsService;
