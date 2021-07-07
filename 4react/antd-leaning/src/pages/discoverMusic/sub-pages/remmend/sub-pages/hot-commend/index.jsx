import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';

// 导入获取推荐请求的action方法
import { getRecommend } from "../../store/actions";

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYThemeCover from '@/components/theme-cover';
import {
  RecommendWrapper
} from "./styled";

const HotCommend = memo(() => {
  // 获取热门推荐state状态
  const state = useSelector(state => {
    return {
      recommends: state.recommend.get('hotRecommends')
    }
  }, shallowEqual)

  const dispatch = useDispatch();

  const history = useHistory();

  // 首次渲染请求数据
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch]);

  // 点击关键字进入搜索
  // 进入歌单列表页面
  const keywordClick = useCallback((keyword) => {

    history.push({ pathname: "/discover/songs", cat: keyword });

  }, [history]);


  return (

    <RecommendWrapper>

      <HYThemeHeaderRCM title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
        keywordClick={keywordClick} />

      {/* 这里要给每个推荐图片加上导航了 */}
      <div className="recommend-list">
        {
          state.recommends.slice(0, 8).map((item, index) => {
            return (
              <HYThemeCover info={item} key={item.id} link={`/discover/playList/${item.id}`} />
            )
          })
        }
      </div>


    </RecommendWrapper>

  );
});

export default HotCommend;