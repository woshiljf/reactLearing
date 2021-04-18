import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentItem from '../componentItem/index'

import './index.css'

class ComponentList extends Component {
  render () {

    const { commentList } = this.props
    let display = commentList.length === 0 ? 'block' : 'none'

    return (
      <div className="componentListBox">

        <h2 style={{ display }}> 暂时没有评论......</h2>

        <ul>

          {

            commentList.map((item, index) => {
              return (
                <ComponentItem userInfo={item} key={index} index={index} deleteComment={this.props.deleteComment}></ComponentItem>
              )
            })

          }

        </ul>






      </div>
    );
  }
}

ComponentList.propTypes = {

  commentList: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default ComponentList;