
// 对于复杂状态对象，可以是哦使用 immutable来管理状态数据
import { Map } from "immutable";

import * as actionTypes from './action-types';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  // 三大榜单数据
  topUpList: {},
  topNewList: {},
  topOriginList: {},

  settleSings: [],
  allTopLists: []  // 所有榜单的数据


})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      // 轮播图
      return state.set("topBanners", action.banners);
    // 热门推荐
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.recommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      // 新专辑
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_UP_LIST:
      // 顶部
      return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings)
    case actionTypes.CHANGE_SETTOPLISTS:
      return state.set("allTopLists", action.allTopLists)
    default:
      return state;
  }
}

