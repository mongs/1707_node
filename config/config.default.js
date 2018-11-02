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

  // add your config here
  config.middleware = [ 'auth' ];

  return config;
};
