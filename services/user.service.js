const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log(err);
    });
  }

  create() {}

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  findOne(id) {}

  update() {}

  delete() {}
}

module.exports = UserService;
