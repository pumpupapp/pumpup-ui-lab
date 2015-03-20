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

  var Title = React.createClass({
    render() {
      return (
        <h1 className='header_title'>{this.props.children}</h1>
      )
    }
  })

  var Header = React.createClass({
    mixins: [RouteEvents],
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
    getInitialState() {
      return {
        isLeftButtonVisible: false,
      }
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
    render() {

      var title               = this.props.title
      var isLeftButtonVisible = this.state.isLeftButtonVisible

      var child = title === 'logo' ? <Logo /> : null

      return (
        <header className='header'>
          <LeftButton isVisible={isLeftButtonVisible} />
          <Title>{child}</Title>
        </header>
      )
    }
  })

  return Header
})