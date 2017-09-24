/* jshint esversion: 6 */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({readOnly:true});

var port = process.env.PORT || 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

// Use default router
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
