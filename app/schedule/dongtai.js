'use strict';

let k = 100;

// 动态函数的方式
// @pram app
module.exports = () => {
  return {
    schedule: {
      interval: '5s',
      type: 'all',
    },

    // @pram ctx
    async task() {
      ++k;
      console.log(k);
    },
  };
};