import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render () {
    return (
      <div>
        <h1>我是header组件</h1>
      </div>
    );
  }
}

Header.propTypes = {

  name: PropTypes.string.isRequired

};

export default Header;