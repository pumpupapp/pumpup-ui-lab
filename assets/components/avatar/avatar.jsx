define(function(require) {

  'use strict';

  var React    = require('react')
  var classSet = React.addons.classSet

  var Avatar = React.createClass({
    propTypes: {
      size : React.PropTypes.string,
      src  : React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
      return {
        size : 'large',
        src  : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
      }
    },
    isTiny: function() {
      return this.props.size == 'tiny'
    },
    getDimension: function() {
      return this.isTiny() ? 24: 128
    },
    render: function() {
      var dimension      = this.getDimension()
      var src            = this.props.src
      var classNameImage = classSet({
        'avatar-photo'       : true,
        'avatar-photo--tiny' : this.isTiny()
      })
      return (
        <div className="avatar">
          <img className={classNameImage} src={src} width={dimension} height={dimension} />
        </div>
      )
    },
  })

  return Avatar
})