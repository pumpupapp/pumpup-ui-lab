define(function(require) {

  'use strict';

  var React              = require('react')
  var RouteHandler       = require('react-router').RouteHandler

  var NavBar = require('../nav-bar/nav-bar')
  var TabBar = require('../tab-bar/tab-bar')

  var App = React.createClass({
    render() {
      return (
        <div className='app'>
          <header className='app_nav'>
            <NavBar />
          </header>
          <main className='app_body'>
            <RouteHandler />
          </main>
          <footer className='app_tabs'>
            <TabBar />
          </footer>
        </div>
      )
    },
    componentWillMount() {
      if (window.pumpup) {
        throw new Error(`There can only be one instance of "${this.constructor.displayName}"`)
      }
      window.pumpup = this
    },
    componentWillUnmount() {
      delete window.pumpup
    },
  })

  return App
})