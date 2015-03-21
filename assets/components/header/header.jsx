define(function(require) {

  'use strict';

  var React              = require('react')
  var CSSTransitionGroup = require('react').addons.CSSTransitionGroup
  var History            = require('react-router').History
  var HashLocation       = require('react-router').HashLocation


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
            width='180'
            height='28'
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
      var onClick   = isVisible ? History.back : () => {}
      var button    = !isVisible ? null : (
        <a
          onClick={onClick}
          key='back-button'
          className='header_button header_button-left'>
          Back
        </a>
      )
      return (
        <CSSTransitionGroup transitionName='fade-in-from-right'>
          {button}
        </CSSTransitionGroup>
      )
    },
  })

  var AppTitle = React.createClass({
    render() {
      var children = this.props.children
      var title = null
      var logo = null
      if (children) {
        title = <h1 className='header_title' key='header-title'>{children}</h1>
      }
      else {
        logo = <h1 className='header_title header_title--logo' key='header-logo'><Logo /></h1>
      }
      return (
        <CSSTransitionGroup transitionName='fade-in-from-right'>
          {logo}
          {title}
        </CSSTransitionGroup>
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

      return (
        <header className='header'>
          <LeftButton isVisible={isLeftButtonVisible} />
          <AppTitle>{title}</AppTitle>
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