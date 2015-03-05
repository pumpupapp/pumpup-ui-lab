define(function(require) {

  'use strict';

  var React = require('react')
  var Link  = require('react-router').Link

  var ComponentsList = React.createClass({
    propTypes: {
      components: React.PropTypes.array.isRequired,
    },
    getDefaultProps() {
      return {
        components: ['avatar', 'bio', 'button']
      }
    },
    render() {
      return (
        <ul>{this.props.components.map(componentItem)}</ul>
      )
    }
  })

  function componentItem(component) {
    return (
      <li key={component}>
        <Link to='component' params={{name: component}}>{component}</Link>
      </li>
    )
  }

  return ComponentsList
})