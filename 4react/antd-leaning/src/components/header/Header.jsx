import React, { Component } from 'react';

import { Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

class Header extends Component {
  state = {
    username: '',
    password: '',
    data: ''
  }

  static getDerivedStateFromProps (props, state) {

    console.log(props, state);

    return null


  }

  getSnapshotBeforeUpdate () {

    console.log('render之后,componentDidUpdate之前');
    return 'snapHot'

  }

  componentDidUpdate (preProps, preState, snapHotValue) {
    console.log(snapHotValue);
    console.log('1');
  }

  saveFormdata = (dataType, event) => {
    this.setState({
      [dataType]: event.target.value
    })
  }


  // UNSAFE_componentWillMount () {
  //   console.log('1123141');
  // }

  handle = () => {


    this.setState((state, props) => {
      console.log('下沟', state);
      console.log(props);
      return { data: '小狗' }

    }, () => {
      console.log('jjj');
    })

    console.log('xioamaogjo');

  }

  render () {
    console.log('渲染 了');
    return (
      <div>
        <Input onChange={(event) => { this.saveFormdata('username', event) }} placeholder="用户名" prefix={<UserOutlined />} />
        <Input onChange={(event) => { this.saveFormdata('password', event) }} placeholder="密码" prefix={<KeyOutlined />} />
        <Button onClick={this.handle}>提交</Button>
      </div>
    );
  }
}

export default Header;