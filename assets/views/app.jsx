define(function(require) {

  'use strict';

  var React        = require('react')
  var RouteHandler = require('react-router').RouteHandler
  var Link         = require('react-router').Link

  var App = React.createClass({
    render: function() {
      return (
        <div>
          <header>
            <h1><Link to='app'>PumpUp UI Lab</Link></h1>
          </header>
          <RouteHandler />
          <footer>
            <div>&copy; 2015</div>
          </footer>
        </div>
      )
    }
  })

  return App
})