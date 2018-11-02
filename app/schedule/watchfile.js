'use strict';

const Subscription = require('egg').Subscription;

let i = 10;

class WatchFile extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s',
      type: 'all',
    };
  }

  // 定时任务执行的操作
  async subscribe() {
    ++i;
    console.log(i);
  }
}

module.exports = WatchFile;
