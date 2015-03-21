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
        components: ['avatar', 'header', 'button', 'title']
      }
    },
    render() {
      return (
        <ul className="lab-components">
          {this.props.components.map((component, index) =>
            <ComponentsList.Item key={index}>
              {component}
            </ComponentsList.Item>
          )}
        </ul>
      )
    }
  })

  ComponentsList.Item = React.createClass({
    render() {
      var component = this.props.children
      return (
        <li>
          <Link
            to='component'
            params={{name: component}}
            className="lab-components_item"
          >
            {component}
          </Link>
        </li>
      )
    }
  })

  return ComponentsList
})