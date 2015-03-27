define(function(require) {

  'use strict';

  var React      = require('react')
  var classNames = require('classnames')

  var Avatar = React.createClass({
    propTypes: {
      size : React.PropTypes.string,
      src  : React.PropTypes.string.isRequired
    },
    getDefaultProps() {
      return {
        size : 'large',
        src  : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
      }
    },
    render() {
      var dimension      = this.getDimension()
      var src            = this.props.src
      var classNameImage = classNames({
        'avatar_photo'       : true,
        'avatar_photo--tiny' : this.isTiny()
      })
      return (
        <div className='avatar'>
          <img className={classNameImage} src={src} width={dimension} height={dimension} />
        </div>
      )
    },
    isTiny() {
      return this.props.size === 'tiny'
    },
    getDimension() {
      return this.isTiny() ? 24: 128
    },
  })

  return Avatar
})