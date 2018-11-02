'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.service.home.findAll();
    await this.ctx.render('index', {
      data,
    });
  }
  async news() {
    console.log(this.ctx.params);
    this.ctx.body = 'news';
  }
}

module.exports = HomeController;
