import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

class ComponentItem extends Component {

  static propTypes = {

    index: PropTypes.number.isRequired

  }
  deleHandle = () => {
    console.log(this);
    const { index, deletecomment } = this.props
    // 发布消息
    deletecomment(index)
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