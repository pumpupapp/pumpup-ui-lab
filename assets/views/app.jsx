define(function(require) {

  'use strict';

  var React        = require('react')
  var RouteHandler = require('react-router').RouteHandler
  var Link         = require('react-router').Link

  var Logo = React.createClass({
    render() {
      var containerStyles = {
        display: 'inline-block',
        verticalAlign: 'top',
      }
      var imageStyles = {
        display: 'block',
      }
      return (
        <span style={containerStyles}>
          <img
            style={imageStyles}
            src='/assets/graphics/logo.png'
            alt='PumpUp Lab'
            width='225' height='35'
          />
        </span>
      )
    }
  })

  var App = React.createClass({
    render() {
      return (
        <div>
          <header>
            <h1><Link to='app'><Logo /></Link></h1>
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