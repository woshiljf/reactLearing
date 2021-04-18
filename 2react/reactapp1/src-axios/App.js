import logo from './logo.svg';
import React, { Component } from 'react'

import Header from './components/header'
import Main from './components/main'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '龙小狗'
    }
  }


  render () {

    return (

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>您好啊11，欢迎回来</h1>
        <Header name="小狗"></Header>
        <Main></Main>
      </div>

    )


  }


}




export default App;
