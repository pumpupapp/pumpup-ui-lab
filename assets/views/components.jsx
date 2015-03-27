define(function(require) {

  'use strict';

  var React              = require('react')
  var Link               = require('react-router').Link
  var Backbone           = require('backbone')
  // var BackboneReactMixin = require('backbone-react-component')

  var components = window.components = new Backbone.Collection([
    { name: 'avatar', },
    { name: 'header', },
    { name: 'button', },
    { name: 'title', },
  ])
  console.log(components)

  var BackboneReactMixin = {
    componentDidMount() {
      var model = this.state.model
      if (model) {
        model.on('all', (change, model, collection, details) => {
          console.debug('Change: %s', change)
          console.debug('Changed model: %o', model)
          console.debug('Full collection: %o', collection)
          console.debug('Change details: %o', details)
          this.setState({ model: collection })
        })
      }
    },
  }

  var ComponentsList = React.createClass({
    mixins: [BackboneReactMixin],
    getInitialState() {
      return {
        model: components,
      }
    },
    render() {
      return (
        <ul className="lab-components">
          {this.state.model.map((component, index) =>
            <ComponentsList.Item key={index}>
              {component.get('name')}
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