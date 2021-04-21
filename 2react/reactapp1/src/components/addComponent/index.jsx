import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css'

class AddComponent extends Component {

  static propTypes = {
    addcomment: PropTypes.func.isRequired
  }
  state = {
    name: '',
    content: ''
  }

  nameHandle (event) {

    var name = event.target.value

    if (name === '') return

    this.setState({
      name
    })
  }
  contentHandle (event) {
    var content = event.target.value
    if (content === '') return
    this.setState({
      content
    })
  }

  addComentHandle () {
    var { name, content } = this.state

    console.log(this.props);

    this.props.addcomment({ name, content })
  }
  render () {
    return (
      <div className="box">

        <div className="usenameBox">

          <label for="name">用户名</label>
          <input id='name' type='text' onChange={this.nameHandle.bind(this)}></input>

        </div>

        <div className="commentBox">
          <label for="comment">评论内容:</label>
          <textarea id='comment' type='text' onChange={this.contentHandle.bind(this)}></textarea>
        </div>

        <div className="submit">

          <button onClick={this.addComentHandle.bind(this)}>提交</button>

        </div>


      </div>
    );
  }
}


export default AddComponent;