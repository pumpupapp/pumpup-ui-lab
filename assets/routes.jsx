define(function(require) {

  'use strict';

  var React        = require('react')
  var Route        = require('react-router').Route
  var DefaultRoute = require('react-router').DefaultRoute

  var App        = require('./components/app/app')
  var Components = require('./views/components')
  var Component  = require('./views/component')

  return (
    <Route handler={App} name='app' path='/'>
      <DefaultRoute handler={Components} />
      <Route handler={Component} name='component' path='components/:name' />
    </Route>
  )
})