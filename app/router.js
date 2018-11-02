'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/post', controller.post.showPost);
  router.get('/news/:no', controller.home.news);
  router.get('/admin', controller.admin.echo);

  router.post('/post', controller.post.postData);
};
