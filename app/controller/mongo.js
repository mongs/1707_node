'use strict';

const Controller = require('egg').Controller;

class MongoController extends Controller {
  // 1. 查 find
  async find() {
    const res = await this.app.mongo.find('users');
    // const res = await this.app.mongo.find('users', { limit: 1 });
    // const res = await this.app.mongo.find('users', { query: { username: 'abc' } });
    console.log(res);
    this.ctx.body = res;
  }

  // 2. 增 insertOne
  async add() {
    const doc = {
      username: 'fengjun',
      password: '1234',
    };
    // 插入一条数据
    const res = await this.app.mongo.insertOne('users', {
      doc,
    });
    this.ctx.body = res;
  }

  // 3. 增加多条数据 insertMany
  async addMany() {
    const docs = [{
      username: 'zhangsan',
      password: '1234',
    }, {
      username: 'lisi',
      password: 'laosi',
    }];
    // 插入多条数据
    // 注意是docs
    const res = await this.app.mongo.insertMany('users', {
      docs,
    });
    this.ctx.body = res;
  }

  // 4. 更新 findOneAndUpdate
  async updateOne() {
    const res = await this.app.mongo.findOneAndUpdate('users', {
      filter: {
        username: 'abc',
      },
      update: {
        $set: {
          password: 'abcd',
        },
      },
    });
    this.ctx.body = res;
  }

  // 5. 删除 findOneAndDelete
  async deleteOne() {
    const res = await this.app.mongo.findOneAndDelete('users', {
      filter: {
        username: 'abc',
      },
    });
    this.ctx.body = res;
  }
}

module.exports = MongoController;
