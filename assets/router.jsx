define(function(require) {

  'use strict';

  var React  = require('react')
  var Router = require('react-router')

  var routes = require('./routes')

  Router.run(routes, (Handler, state) => {
    // var routesDepth = state.routes.length
    // if (routesDepth) {
    //   var deepestRoute = state.routes[routesDepth - 1]
    //   if (deepestRoute.handler.title) {
    //     document.title = deepestRoute.handler.title
    //   }
    // }
    React.render(<Handler/>, document.body)
  })

})