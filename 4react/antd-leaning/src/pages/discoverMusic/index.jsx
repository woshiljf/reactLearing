import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {
  dicoverMenu
} from "@/services/headerNav.js";

import {
  DiscoverMusicContainer,
  TopMenu
} from './style'


export default memo(function DiscoverMusic (props) {


  const { route } = props


  return (
    <DiscoverMusicContainer>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })
          }
        </TopMenu>

        {renderRoutes(route.routes)}


      </div>
    </DiscoverMusicContainer>






  )



})

