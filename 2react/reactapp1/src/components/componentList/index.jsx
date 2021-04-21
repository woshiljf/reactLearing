import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentItem from '../componentItem/index'

import { deletecomment } from "../../redux/actions";

import { connect } from "react-redux";

import './index.css'

class ComponentList extends Component {
  render () {

    const { commentList, deletecomment } = this.props
    let display = commentList.length === 0 ? 'block' : 'none'

    return (
      <div className="componentListBox">

        <h2 style={{ display }}> 暂时没有评论......</h2>

        <ul>

          {
            commentList.map((item, index) => {
              return (
                <ComponentItem userInfo={item} key={index} index={index} deletecomment={deletecomment}></ComponentItem>
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
};

export default connect(

  state => ({ commentList: state.comments }),
  {
    deletecomment
  }

)(ComponentList);