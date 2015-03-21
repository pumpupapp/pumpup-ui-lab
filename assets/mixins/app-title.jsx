define(function(require) {

  'use strict';

  var AppTitle = {
    componentDidMount() {
      window.pumpup.header.setState({
        title: this.getTitle()
      })
    },
    componentWillUnmount() {
      window.pumpup.header.setState({
        title: null
      })
    },
  }

  return AppTitle
})