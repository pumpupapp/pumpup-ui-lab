define(function(require) {

  'use strict';

  var React = require('react')

  var Title = require('./title')

  var TitleDemo = React.createClass({
    render() {
      return (
        <div>
          <Title level="1">title 1</Title>
          <Title level="2">title 2</Title>
          <Title level="3">title 3</Title>
          <Title level="4">title 4</Title>
          <Title level="5">title 5</Title>
          <Title level="6">title 6</Title>
        </div>
      )
    }
  })

  return TitleDemo
})