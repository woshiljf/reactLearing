import React, { Component } from 'react';

import { Button } from 'antd'

class MyFriend extends Component {
  render () {
    return (
      <div>
        <h1>我的朋友</h1>
        <Button type="primary">点我</Button>
      </div>
    );
  }
}

export default MyFriend;