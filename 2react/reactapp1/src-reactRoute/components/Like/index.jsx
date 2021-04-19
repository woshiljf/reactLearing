import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './index.css'
import MyNavLink from '../NavLink/index'
import Apple from './component/Apple'
import Bannaner from './component/Bannaner'
import Orange from './component/Orange'


class Like extends Component {


  handlePath () {

    console.log(this.props);


  }

  render () {
    return (
      <div className="likeBox">
        <h1>喜欢</h1>
        <div className="navBox">
          <ul>
            <li>
              <MyNavLink to="/like/apple">苹果</MyNavLink>

            </li>
            <li>
              <MyNavLink to="/like/bannaner">香蕉</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/like/oranger">橘子</MyNavLink>

              {/* 通过按钮跳转路由 */}


            </li>
          </ul>
        </div>
        <div className="showBox">
          <Switch>
            <Route path="/like/apple" component={Apple}>
            </Route>
            <Route path="/like/bannaner">
              <Bannaner />
            </Route>
            <Route path="/like/oranger" component={Orange}>
            </Route>
            <Redirect to="/like/apple"></Redirect>
          </Switch>


        </div>




      </div>
    );
  }
}

export default Like;