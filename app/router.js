'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/find', controller.mongo.find);
  router.get('/add', controller.mongo.add);
  router.get('/add_many', controller.mongo.addMany);
  router.get('/update', controller.mongo.updateOne);
  router.get('/delete', controller.mongo.deleteOne);
};
