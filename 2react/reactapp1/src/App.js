import logo from './logo.svg';
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// 引入组件
import AddComponent from './components/addComponent/index.jsx'
import ComponentList from './components/componentList/index.jsx'
import { Button } from "antd-mobile";
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
  }

  componentDidMount () {

    // pubsub进行订阅
    // PubSub.subscribe('deleteData', (msg, index) => {
    //   this.deleHandle(index)
    // })
  }

  // 使用箭头函数，解决this指向的问题
  deleHandle = (index) => {

    const { commentList } = this.state

    commentList.splice(index, 1)
    this.setState({
      commentList
    })
  }


  addHandle = (content) => {

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
        <h1>您好啊111111，欢迎回来</h1>
        {/* <Button type="primary">点我</Button> */}

      </div>

    )


  }


}




export default App;
