define(function(require) {

  'use strict';

  var React        = require('react')
  var Link         = require('react-router').Link
  var History      = require('react-router').History
  var HashLocation = require('react-router').HashLocation

  var Logo = React.createClass({
    render() {
      var containerStyles = {
        display       : 'inline-block',
        verticalAlign : 'top',
      }
      var imageStyles = {
        display: 'block',
      }
      return (
        <span style={containerStyles}>
          <img
            style={imageStyles}
            src='/assets/graphics/logo.png'
            alt='PumpUp Lab'
            width='225' height='35'
          />
        </span>
      )
    }
  })

  var RouteEvents = {
    componentDidMount() {
      this.onPathChange(HashLocation.getCurrentPath())
      HashLocation.addChangeListener(this.onLocationChange)
    },
    componentWillUnmount() {
      HashLocation.removeChangeListener(this.onLocationChange)
    },
    onLocationChange(location) {
      this.onPathChange(location.path)
    },
  }

  var LeftButton = React.createClass({
    propTypes: {
      isVisible: React.PropTypes.bool.isRequired
    },
    render() {
      var isVisible = this.props.isVisible
      if (!isVisible) {
        return null
      }
      return (
        <a className='header_button header_button-left' onClick={History.back}>Back</a>
      )
    }
  })

  var AppTitle = React.createClass({
    render() {
      return (
        <h1 className='header_title'>{this.props.children}</h1>
      )
    }
  })

  var Header = React.createClass({
    mixins: [RouteEvents],
    getInitialState() {
      return {
        title               : null,
        isLeftButtonVisible : false,
      }
    },
    render() {

      var title               = this.state.title
      var isLeftButtonVisible = this.state.isLeftButtonVisible

      var child = title || <Logo />

      return (
        <header className='header'>
          <LeftButton isVisible={isLeftButtonVisible} />
          <AppTitle>{child}</AppTitle>
        </header>
      )
    },
    componentWillMount() {
      if (window.pumpup.header) {
        throw new Error(`There can only be one instance of "${this.constructor.displayName}"`)
      }
      window.pumpup.header = this
    },
    componentWillUnmount() {
      delete window.pumpup.header
    },
    onPathChange(path) {
      if (path === '/') {
        this.hideLeftButton()
      }
      else {
        this.showLeftButton()
      }
    },
    hideLeftButton() {
      this.setState({
        isLeftButtonVisible: false
      })
    },
    showLeftButton() {
      this.setState({
        isLeftButtonVisible: true
      })
    },
  })

  return Header
})