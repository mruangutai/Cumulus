'use strict';

var React        = require('react')
var RouteHandler = require('react-router').RouteHandler

var TrackStore   = require('../stores/TrackStore')

var Header       = require('./headerSection')
var MediaPlayer  = require('./mediaPlayer')

var CumulusApp   = React.createClass({

  mixins : [TrackStore.mixin],

  storeDidChange: function() {

  },

  render: function() {
    return (
      <div className="cumulusapp">
        <div className="content__wrapper">
          {/* <Header /> */}
          <RouteHandler />
        </div>
        <MediaPlayer />
      </div>
    )
  }

})

module.exports = CumulusApp
