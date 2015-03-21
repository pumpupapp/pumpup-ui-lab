define(function(require) {

  'use strict';

  var React        = require('react')
  var RouteHandler = require('react-router').RouteHandler

  var Header       = require('../components/header/header')

  var App = React.createClass({
    render() {
      return (
        <div className='lab-root'>
          <Header />
          <div className='lab-body add--scrollable'>
            <RouteHandler />
          </div>
          <footer>
            <div>&copy; 2015</div>
          </footer>
        </div>
      )
    },
    componentWillMount() {
      if (window.pumpup) {
        throw new Error(`There can only be one instance of "${this.constructor.displayName}"`)
      }
      window.pumpup = this
    },
    componentWillUnmount() {
      delete window.pumpup
    },
  })

  return App
})