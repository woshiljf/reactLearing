import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class MyNavLink extends Component {
  render () {
    return (
      // 简单点，直接在源标签是绑定属性2
      <NavLink {...this.props} activeClassName="selected" activeStyle={{
        fontWeight: "bold",
        fontSize: '20px'
      }}></NavLink>
    );
  }
}

export default MyNavLink;