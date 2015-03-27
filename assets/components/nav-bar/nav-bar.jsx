define(function(require) {

  'use strict';

  var React              = require('react')
  var CSSTransitionGroup = require('react').addons.CSSTransitionGroup
  var HashLocation       = require('react-router').HashLocation
  var History            = require('react-router').History
  var classNames         = require('classnames')

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

  var NavBar = React.createClass({
    mixins: [RouteEvents],
    getInitialState() {
      return {
        title               : null,
        isLeftButtonVisible : false,
      }
    },
    render() {

      var title                = this.state.title
      var isLeftButtonVisible  = this.state.isLeftButtonVisible
      var isRightButtonVisible = true

      return (
        <nav className='nav-bar'>
          <span className='nav-bar_item nav-bar_item--left'>
            <CSSTransitionGroup transitionName='fade-in-from-right'>
              {isLeftButtonVisible ? <NavBarLeftButton key='app-left-button' /> : null}
            </CSSTransitionGroup>
          </span>
          <span className='nav-bar_item nav-bar_item--middle'>
            <CSSTransitionGroup transitionName='fade-in-from-right'>
              <NavBarTitle key={title ? 'app-title' : 'app-logo'}>{title}</NavBarTitle>
            </CSSTransitionGroup>
          </span>
          <span className='nav-bar_item nav-bar_item--right'>
            <CSSTransitionGroup transitionName='fade-in-from-right'>
              {isRightButtonVisible ? <NavBarRightButton key='app-right-button' /> : null}
            </CSSTransitionGroup>
          </span>
        </nav>
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

  var NavBarTitle = React.createClass({
    render() {
      var children = this.props.children
      var className = classNames({
        'nav-bar_title'       : true,
        'nav-bar_title--logo' : !children
      })
      if (!children) {
        children = <Logo />
      }
      return (
        <h1 className={className}>{children}</h1>
      )
    }
  })

  var Logo = React.createClass({
    render() {
      var containerStyles = {
        display : 'block',
        margin  : '0 auto',
      }
      var imageStyles = {
        display : 'block',
        margin  : '0 auto',
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

  var NavBarLeftButton = React.createClass({
    render() {
      return (
        <a
          onClick={History.back}
          className='nav-bar_button'>
          Back
        </a>
      )
    },
  })

  var NavBarRightButton = React.createClass({
    render() {
      return (
        <a
          onClick={alert.bind(null, 'hello')}
          className='nav-bar_button'>
          Right
        </a>
      )
    },
  })

  return NavBar
})