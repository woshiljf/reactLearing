import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import MessageInfo from './message.jsx'

import MyNavLink from '../../../NavLink/index'

class Orange extends Component {

  constructor(props) {
    super(props);
    this.state = {

      message: [
        { id: 1, name: '小狗', content: '小狗爱吃草' },
        { id: 3, name: '小猫', content: '小猫爱吃🐟' },
        { id: 10, name: '小猪', content: '小猪爱吃饭' },
        { id: 5, name: '小牛', content: '小牛爱吃草' },

      ]

    }
  }

  handlePath = (id) => {

    console.log(this.props);
    console.log(id);

  }

  render () {
    const { message } = this.state
    return (
      <div>

        <ul>

          {


            message.map((item, index) => (


              <li key={index}>

                <MyNavLink to={`/like/oranger/message/${item.id}`}>{item.name}</MyNavLink>
                <button onClick={() => this.handlePath(item.id)}>跳转</button>
              </li>


            ))


          }


        </ul>

        <Switch>

          <Route path='/like/oranger/message/:id' component={MessageInfo}></Route>

        </Switch>


      </div>
    );
  }
}

export default Orange;