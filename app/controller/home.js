'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.render('index');
  }
}

module.exports = HomeController;
