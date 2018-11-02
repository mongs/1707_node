'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  // show post page
  async showPost() {
    await this.ctx.render('post', {
      // csrf: this.ctx.csrf,
    });
  }

  // submit data
  async postData() {
    const data = this.ctx.request.body;
    console.log(data);
    this.ctx.body = 'success';
  }
}

module.exports = PostController;
