require.config({
  baseUrl: './assets',
  deps: ['router'],
  paths: {
    'backbone-react-component' : '../vendor/backbone-react-component/lib/component',
    'classnames'               : '../vendor/classnames/index',
    'requirejs'                : '../vendor/requirejs/require',
    'react'                    : '../vendor/react/react-with-addons',
    'react-router'             : '../vendor/react-router/build/global/ReactRouter',
  },
  shim: {
    'classnames': {
      exports: 'classNames'
    }
  }
})