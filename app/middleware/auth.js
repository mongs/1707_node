'use strict';

module.exports = () => {
  return async function auth(ctx, next) {
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};
