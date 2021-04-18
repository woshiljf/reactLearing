import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentItem from '../componentItem/index'

import './index.css'

class ComponentList extends Component {
  render () {

    const { commentList } = this.props


    return (
      <div className="componentListBox">


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