'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_wally';

  // 配置视图模板
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.public = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // support lazy load
    dynamic: true,
    preload: true,
    buffer: false,
    maxFiles: 1000,
  };

  // mongodb
  config.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'egg-test',
      user: 'eggAdmin',
      password: '111111',
      options: {},
    },
  };

  return config;
};
