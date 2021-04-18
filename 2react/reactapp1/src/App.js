import logo from './logo.svg';
import React, { Component } from 'react'
// 引入组件

import AddComponent from './components/addComponent/index.jsx'
import ComponentList from './components/componentList/index.jsx'
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentList: [

        { "name": '小狗', content: '今天的天气真好，你说对不对' },
        { "name": '小猪', content: '今天的天气真好，你说对不对' },
        { "name": '小鸡', content: '今天的天气真好，你说对不对' },
        { "name": '小牛', content: '今天的天气真好，你说对不对' },
        { "name": '小兔', content: '今天的天气真好，你说对不对' },

      ]
    }
    this.addHandle = this.addHandle.bind(this)
    this.deleHandle = this.deleHandle.bind(this)
  }

  deleHandle (index) {

    const { commentList } = this.state

    commentList.splice(index, 1)
    this.setState({
      commentList
    })
  }


  addHandle (content) {

    const { commentList } = this.state
    commentList.unshift(content)

    this.setState({
      commentList
    })

  }


  render () {
    const { commentList } = this.state
    return (

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>您好啊11，欢迎回来</h1>
        <AddComponent addHandle={this.addHandle}></AddComponent>
        <ComponentList commentList={commentList} deleteComment={this.deleHandle}></ComponentList>
      </div>

    )


  }


}




export default App;
