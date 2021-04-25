import * as actionTypes from "./action-types";

import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList,
  getAllTopList
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners
})

const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  recommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.monthData
})

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
})

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
})


// 飙升榜单id
const changeUpListActionId = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpListIdId: res
})

// 新歌榜单Id
const changeNewListActionId = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewListId: res
})

// 原创榜单Id
const changeOriginListActionId = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginListId: res
})


const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})

const changeSetTopListsAction = (res) => {

  return {

    type: actionTypes.CHANGE_SETTOPLISTS,
    allTopLists: res.list


  }


}


// 异步请求

// 获取轮播图
export const getBanner = () => {


  return dispatch => {
    getTopBanner().then(res => {

      dispatch(changeBannerAction(res));
    })
  }
}

// 获取热门推荐
export const getRecommend = () => {
  return dispatch => {
    getHotRecommend().then(res => {
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getAlbum = () => {
  return dispatch => {
    getNewAlbum(10, 0).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 获取榜单数据
export const getTopData = (p) => {
  return dispatch => {
    getTopList(p.id).then(res => {
      switch (p.type) {
        case 'new':
          dispatch(changeNewListAction(res));
          break;
        case 'orgin':
          console.log('origin', res);
          dispatch(changeOriginListAction(res));
          break;
        case 'top':

          dispatch(changeUpListAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}


const getTest = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
      console.log('dagou', res);
    })

  }
}

// 获取所有的榜单数据

export const getAlltopLists = () => {
  return dispatch => {
    getAllTopList().then(res => {
      const dataList = res.list.slice(0, 3)
      // 飙升榜
      const topListBand = dataList[0]
      const newLists = dataList[1]
      const orginLists = dataList[2]

      dispatch(changeSetTopListsAction(res))
      dispatch(getTopData({ id: topListBand.id, type: 'top' }))
      dispatch(getTopData({ id: newLists.id, type: 'new' }))
      dispatch(getTopData({ id: orginLists.id, type: 'orgin' }))

    })
  }
}



export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}



