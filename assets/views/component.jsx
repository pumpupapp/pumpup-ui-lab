define(function(require) {

  'use strict';

  var React  = require('react')
  var Router = require('react-router')

  var AppTitle = require('../mixins/app-title')

  function addComponentStyleSheets(name) {
    var component = addStyleSheet('assets/components/' + name + '/' + name + '.css')
    var componentDemo = addStyleSheet('assets/components/' + name + '/' + name + '-demo.css')
    return [component, componentDemo]
  }

  function addComponentScripts(name, callback, errback) {
    require(['../components/' + name + '/' + name, '../components/' + name + '/' + name + '-demo'], callback, errback)
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
    mixins: [Router.State, AppTitle],
    render() {
      return (
        <div className='lab-content'>
          <div className='component-demo' ref='demo'>Loading...</div>
        </div>
      )
    },
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
      }, (err) => {
        var message = 'Error loading ' + JSON.stringify(err.requireModules, null, '  ')
        this.refs.demo.getDOMNode().innerHTML = message
      })
    },
    componentWillUnmount() {
      removeStyleSheets(this.styleSheets)
      delete this.styleSheets
    },
    getTitle() {
      var params = this.getParams()
      return `Component: ${params.name}`
    },
  })

  return ComponentPreview
})