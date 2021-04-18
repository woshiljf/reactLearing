import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render () {
    return (
      <div>
        <h1>我是head1er组件</h1>
      </div>
    );
  }
}


export default Header;