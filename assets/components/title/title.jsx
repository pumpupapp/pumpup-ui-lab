define(function(require) {

  'use strict';

  var React = require('react')

  var Title = React.createClass({
    propTypes: {
      level: React.PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
    },
    render() {
      var children     = this.props.children
      var level        = this.props.level
      var LevelledHeading = 'h' + level
      return <LevelledHeading className='title'>{children}</LevelledHeading>
    }
  })

  return Title
})