import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css'

class ComponentItem extends Component {

  static propTypes = {

    deleteComment: PropTypes.func.isRequired,

    index: PropTypes.number.isRequired

  }
  deleHandle () {
    const { index, deleteComment } = this.props
    deleteComment(index)
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
            <button onClick={this.deleHandle.bind(this)}>删除</button>
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