define(function(require) {

  'use strict';

  var React = require('react')

  var Button = require('./button')

  var ButtonDemo = React.createClass({
    render() {
      return (
        <div>
          <Button>sup :)</Button>
          <br />
          <br />
          <Button round-corners full-width>Rounded and full width 8D</Button>
        </div>
      )
    }
  })

  return ButtonDemo
})