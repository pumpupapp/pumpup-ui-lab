define(function(require) {

  'use strict';

  var React        = require('react')
  var RouteHandler = require('react-router').RouteHandler

  var Header       = require('../components/header/header')

  var App = React.createClass({
    render() {
      return (
        <div className="lab-root">
          <Header title="logo" />
          <div className="lab-body add--scrollable">
            <RouteHandler />
            {/*<h1>heading 01</h1>
            <h2>heading 02</h2>
            <h3>heading 03</h3>
            <h4>heading 04</h4>
            <h5>heading 05</h5>
            <h6>heading 06</h6>
            <p>body paragraph</p>
            <h1>heading 01</h1>
            <h2>heading 02</h2>
            <h3>heading 03</h3>
            <h4>heading 04</h4>
            <h5>heading 05</h5>
            <h6>heading 06</h6>
            <p>body paragraph</p>
            <h1>heading 01</h1>
            <h2>heading 02</h2>
            <h3>heading 03</h3>
            <h4>heading 04</h4>
            <h5>heading 05</h5>
            <h6>heading 06</h6>
            <p>body paragraph</p>*/}
          </div>
          <footer>
            <div>&copy; 2015</div>
          </footer>
        </div>
      )
    }
  })

  return App
})