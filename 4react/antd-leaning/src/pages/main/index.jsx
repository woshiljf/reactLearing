import React, { Component, Suspense } from 'react';
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import { connect } from 'react-redux';

import routes from '@/routers/router.js'

import WyHeader from '@/components/header'

import HYAppPlayBar from '@/pages/player/app-play-bar';

import { changePlayListAction } from "../player/store/actionCreators";

class WyMain extends Component {

  constructor(props) {
    super(props);

    console.log(props);
  }
  componentDidMount () {
    // 页面渲染完毕，加载PlayLists
    const playList = JSON.parse(localStorage.getItem('playLists'))
    this.props.changePlayListAction(playList)
    // 拦截判断是否离开当前页面
    window.addEventListener('beforeunload', this.beforeunload);
  }
  componentWillUnmount () {
    // 销毁拦截判断是否离开当前页面
    window.removeEventListener('beforeunload', this.beforeunload);
  }
  //页面离开、刷新、上一步、浏览器关闭之前会被拦截的方法。
  beforeunload = (e) => {
    // 页面刷新之前，把playLists存入到LocalStorage
    localStorage.setItem('playLists', JSON.stringify(this.props.playList))
  }

  render () {
    return (
      <HashRouter>
        <WyHeader></WyHeader>
        <Suspense fallback={<div>loading。。。。。。</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HYAppPlayBar></HYAppPlayBar>
      </HashRouter>
    );
  }
}

export default connect(

  state => {
    return {
      playList: state.player.get('playList')
    }
  },
  {
    changePlayListAction
  }
)(WyMain)