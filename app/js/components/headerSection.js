'use strict';

var React = require('react');
var Link  = require('react-router').Link;

var HeaderSection = React.createClass({

  render: function() {
    return (
      <header>
        <ul>
          <li>
            <Link to="library">Library</Link>
          </li>
          <li>
            <Link to="likes">Projects</Link>
          </li>
          <li>
            <Link to="playlists">Uploads</Link>
          </li>
        </ul>
      </header>
    );
  }

});

module.exports = HeaderSection;
