import logo from './logo.svg';
import React, { Component } from 'react'

import Header from './components/header'
import { Button, Toast } from "antd-mobile";


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '龙小狗'
    }
  }
  handleClick = () => {

    Toast.fail('Load failed !!!', 1);


  }

  render () {

    return (

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>您好啊11，欢迎回来</h1>
        <Button type="primary" onClick={this.handleClick}>点我</Button>
        <Header name="小狗" ></Header>
      </div>

    )


  }


}




export default App;
