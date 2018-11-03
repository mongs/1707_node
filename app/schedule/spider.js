'use strict';

const cheerio = require('cheerio');

module.exports = {
  schedule: {
    interval: '5s',
    type: 'all',
  },

  async task(ctx) {
    const res = await ctx.service.spider.getNews('http://news.baidu.com/');
    const html = res.data.toString();
    const $ = cheerio.load(html);
    const title = $('title').text();
    console.log(title);
  },
};
