import logo from '../logo.svg';
import React, { Component } from 'react'
// 引入组件
import { connect } from 'react-redux'
import AddComponent from '../components/addComponent/index.jsx'
import ComponentList from '../components/componentList/index.jsx'

import { addcomment, getcommentAsync } from "../redux/actions";

import Protypes from 'prop-types'

import './App.css';
class App extends Component {

  static protypes = {
    addcomment: Protypes.func.isRequired,
    getcommentAsync: Protypes.func.isRequired
  }


  // 异步求值
  componentDidMount () {
    this.props.getcommentAsync()
  }
  render () {
    console.log(this.props);
    const { addcomment } = this.props
    return (

      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>您好啊11，欢迎回来</h1>

        <AddComponent addcomment={addcomment} ></AddComponent>

        <ComponentList></ComponentList>

      </div>

    )
  }
}

export default connect(

  // 多个reducers时，使用state选择对应的reducer
  state => ({
    commentList: state.comments,

    counts: state.counter
  }),
  {
    addcomment, getcommentAsync
  }


)(App)
