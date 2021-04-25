import React, { Component, memo } from 'react';

import { Input } from "antd";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderLeft, HeaderRight } from './style.js'
import { headerLinks } from "@/services/headerNav.js";
import classnames from "classnames";
import { SearchOutlined } from '@ant-design/icons';
const Header = memo(function Header () {

  const showItem = (item, index) => {

    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    )

  }

  return (
    <HeaderContainer>

      <div className="container wrap-v1 content">

        <HeaderLeft>
          <a className="sprite_01 logo" href="#/">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className={classnames("select-item")} key={item.title}>
                    {showItem(item, index)}
                  </div>
                )
              })
            }
          </div>

        </HeaderLeft>


        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="hrClass"></div>
    </HeaderContainer>

  );

})

export default Header