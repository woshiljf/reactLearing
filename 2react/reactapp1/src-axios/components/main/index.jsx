import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getGithubuser } from '../../service/getGithubuser'

class Main extends Component {

  state = {
    imgUrl: ''
  }

  handleClick = () => {

    getGithubuser('a').then(response => {

      var tempImgurl = response.avatar_url
      this.setState({
        imgUrl: tempImgurl
      })



    })


  }
  render () {
    return (
      <div>

        <button onClick={this.handleClick}>请求数据</button>

        <img src={this.state.imgUrl} alt="图片"></img>

      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;