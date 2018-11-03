'use strict';

const Service = require('egg').Service;

class SpiderService extends Service {
  async getNews(url) {
    const result = await this.ctx.curl(url);
    return result;
  }
}

module.exports = SpiderService;
