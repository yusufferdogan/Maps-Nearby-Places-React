const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://web-production-8958.up.railway.app',
      changeOrigin: true,
    })
  );
};
