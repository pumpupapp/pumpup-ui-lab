define(function(require) {

  'use strict';

  var React = require('react')
  var classSet = React.addons.classSet

  var Button = React.createClass({
    propTypes: {
      'round-corners': React.PropTypes.bool,
      'full-width': React.PropTypes.bool,
    },
    render() {
      var className = classSet({
        'button'        : true,
        'button-round'  : this.props['round-corners'],
        'button-block'  : this.props['full-width'],
        'button-active' : this.props['is-active'],
      })
      return (
        <button className={className}>{this.props.children}</button>
      )
    }
  })

  return Button
})