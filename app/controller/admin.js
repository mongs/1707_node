'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async echo() {
    console.log(this.ctx.query);
    this.ctx.body = 'admin, !!';
  }
}

module.exports = AdminController;