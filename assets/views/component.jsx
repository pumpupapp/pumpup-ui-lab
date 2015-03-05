define(function(require) {

  'use strict';

  var React  = require('react')
  var Router = require('react-router')

  function addComponentStyleSheets(name) {
    var component = addStyleSheet('assets/components/' + name + '/' + name + '.css')
    var componentDemo = addStyleSheet('assets/components/' + name + '/' + name + '-demo.css')
    return [component, componentDemo]
  }

  function addComponentScripts(name, callback) {
    require(['../components/' + name + '/' + name, '../components/' + name + '/' + name + '-demo'], callback)
  }

  function addStyleSheet(href) {
    var styleSheet = document.createElement('link')
    styleSheet.rel = 'stylesheet'
    styleSheet.href = href
    document.head.appendChild(styleSheet)
    return styleSheet
  }

  function removeStyleSheets(styleSheets) {
    styleSheets.forEach(removeStyleSheet)
  }

  function removeStyleSheet(styleSheet) {
    document.head.removeChild(styleSheet)
  }

  var ComponentPreview = React.createClass({
    mixins: [Router.State],
    componentWillMount() {
      var params = this.getParams()
      this.styleSheets = addComponentStyleSheets(params.name)
      addComponentScripts(params.name)
    },
    componentDidMount() {
      var params = this.getParams()
      var node   = this.refs.demo.getDOMNode()
      addComponentScripts(params.name, (Component, ComponentDemo) => {
        React.render(<ComponentDemo />, node)
      })
    },
    componentWillUnmount() {
      removeStyleSheets(this.styleSheets)
      delete this.styleSheets
    },
    render() {
      var params = this.getParams()
      return (
        <div>
          <h2>Component: {params.name}</h2>
          <div className='component-demo' ref='demo'>Loading...</div>
        </div>
      )
    }
  })

  return ComponentPreview
})