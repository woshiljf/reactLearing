import React, { Component } from 'react';

// 导入子组件
import TopBanner from './sub-pages/top-banner/index.js'
import WYHotRecommend from './sub-pages/hot-commend/index';
import HYNewAlbum from './sub-pages/new-album';
import HYRankingList from './sub-pages/ranking-list';
import HYUserLogin from './sub-pages/user-login';
import HYSettleSinger from './sub-pages/settle-singer';
import HYHotRadio from './sub-pages/hot-radio';
import {
  RecommendContainer,
  ContentCenter,
  RecommendLeft,
  RecommendRight
} from "./styled.js";


class RecommentMusic extends Component {
  render () {
    return (
      // 推荐首页容器
      <RecommendContainer>
        {/* 顶上轮播图 */}
        <TopBanner></TopBanner>
        {/* 内容区域 */}
        <ContentCenter className="wrap-v2">
          {/* 左边区域 */}
          <RecommendLeft>
            <WYHotRecommend />
            <HYNewAlbum></HYNewAlbum>
            <HYRankingList></HYRankingList>
          </RecommendLeft>
          {/* 右边区域 */}
          <RecommendRight>
            <HYSettleSinger />
            <HYHotRadio />
          </RecommendRight>


        </ContentCenter>




      </RecommendContainer>
    );
  }
}

export default RecommentMusic;