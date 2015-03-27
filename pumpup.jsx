require.config({
  baseUrl: './assets',
  deps: ['router'],
  paths: {
    'backbone'                 : '../vendor/backbone/backbone',
    'backbone-react-component' : '../vendor/backbone-react-component/lib/component',
    'classnames'               : '../vendor/classnames/index',
    'requirejs'                : '../vendor/requirejs/require',
    'react'                    : '../vendor/react/react-with-addons',
    'react-router'             : '../vendor/react-router/build/global/ReactRouter',
    'underscore'               : '../vendor/underscore/underscore',
    'jquery'                   : '../vendor/jquery/dist/jquery',
  },
  shim: {
    'classnames': {
      exports: 'classNames'
    }
  }
})