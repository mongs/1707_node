'use strict';

let k = 100;

// 简写方式
module.exports = {
  schedule: {
    interval: '2s',
    type: 'all',
  },

  async task() {
    k++;
    console.log(k);
  },
};
