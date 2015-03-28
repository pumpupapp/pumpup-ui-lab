define(function(require) {

  'use strict';

  var React = require('react')

  var TabBar = React.createClass({
    render() {
      return (
        <nav className='tab-bar'>
          <span className='tab-bar_item'>
            <TabBarIcon>icon 1</TabBarIcon>
          </span>
          <span className='tab-bar_item'>
            <TabBarIcon>icon 2</TabBarIcon>
          </span>
          <span className='tab-bar_item'>
            <TabBarIcon>icon 3</TabBarIcon>
          </span>
          <span className='tab-bar_item'>
            <TabBarIcon>icon 4</TabBarIcon>
          </span>
          <span className='tab-bar_item'>
            <TabBarIcon>icon 5</TabBarIcon>
          </span>
        </nav>
      )
    }
  })

  var TabBarIcon = React.createClass({
    render() {
      return (
        <a className='tab-bar_icon'>{this.props.children}</a>
      )
    }
  })

  return TabBar
})