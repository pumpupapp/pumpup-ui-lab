var debug       = require('debug')('serve')
var connect     = require('connect')
var jsx         = require('connect-jsx')
var serveStatic = require('serve-static')
var sass        = require('node-sass-middleware')


var app = require('../app')


debug('Starting server at http://localhost:%s', app.port)
var server = connect()
server.use(jsx(app.root))
server.use(sass({
  src      : app.root,
  response : true,
}));
server.use(serveStatic(app.root))
server.listen(app.port)