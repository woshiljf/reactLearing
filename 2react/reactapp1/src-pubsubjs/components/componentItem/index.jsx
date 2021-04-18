import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js'
import './index.css'

class ComponentItem extends Component {

  static propTypes = {

    index: PropTypes.number.isRequired

  }
  deleHandle = () => {
    const { index } = this.props
    // 发布消息
    PubSub.publish('deleteData', index)
  }
  render () {
    const { userInfo } = this.props
    return (
      <div>
        <li>

          <div>
            <span>{userInfo.name}</span>
          </div>

          <div>
            <span>{userInfo.content}</span>
          </div>
          <div>
            <button onClick={this.deleHandle}>删除</button>
          </div>

        </li>

      </div>
    )
  }
}

ComponentItem.propTypes = {

  userInfo: PropTypes.object.isRequired

}

export default ComponentItem