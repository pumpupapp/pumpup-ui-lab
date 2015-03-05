define(function(require) {

  'use strict';

  var React = require('react')

  var Avatar = require('./avatar')

  var AvatarDemo = React.createClass({
    render() {
      return (
        <div>
          <Avatar></Avatar>
          <br />
          <Avatar size='tiny'></Avatar>
        </div>
      )
    }
  })

  return AvatarDemo
})