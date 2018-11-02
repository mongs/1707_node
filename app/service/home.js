'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async findAll() {
    const data = {
      name: 'wally',
      age: 18,
    };
    return data;
  }
}

module.exports = HomeService;
