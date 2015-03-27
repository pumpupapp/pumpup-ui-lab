define(function(require) {

  'use strict';

  var React = require('react')

  var TabBar = React.createClass({
    render() {
      return (
        <nav className='tab-bar'>
          <div>&copy; 2015</div>
        </nav>
      )
    }
  })

  return TabBar
})