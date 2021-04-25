import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// 导入component
import WYThemeHeaderRCM from '@/components/theme-header-rcm';
import WYTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./styled";
// 导入绑定数据请求
import { getAlltopLists, getTopData } from "../../store/actions";

const RankList = memo(() => {

  const dispatch = useDispatch()

  // 获取三大榜单数据,飙升榜，新歌榜，原唱榜

  const state = useSelector(state => {
    return {
      topUplist: state.recommend.get('topUpList'),
      topNewList: state.recommend.get('topNewList'),
      topOriginList: state.recommend.get('topOriginList')
    }
  }, shallowEqual)
  // 数据变化，请求钩子,只要触发dispatch请求，就会重新渲染
  useEffect(() => {
    dispatch(getAlltopLists());
  }, [dispatch])
  return (

    <RankingWrapper>
      <WYThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <WYTopRanking info={state.topUplist} />
        <WYTopRanking info={state.topNewList} />
        <WYTopRanking info={state.topOriginList} />
      </div>
    </RankingWrapper>
  );
});

export default RankList;