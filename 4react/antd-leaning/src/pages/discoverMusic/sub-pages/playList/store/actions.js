import * as actionTypes from "./action-types";

import {
  getPlayListDetail,
  getPlayListComment

} from "@/services/recommend";

// 获取播放歌单同步函数

const changePlayListAction = (res) => ({

  type: actionTypes.CHANGE_PLAYLIST,
  playList: res

})

const changePlayListComment = (res) => ({

  type: actionTypes.CHAGE_PLAYLIST_COMMENT,
  playListComment: res

})

// 异步函数,获取远程服务器数据列表

export const getPlayList = (id) => {

  return dispatch => {
    getPlayListDetail(id).then(res => {
      //  获取歌单详情
      dispatch(changePlayListAction(res))
    })
  }
}

// 获取歌单评论

export const getComment = (id) => {
  return dispatch => {
    getPlayListComment(id).then(res => {
      //  获取歌单详情
      dispatch(changePlayListComment(res))
    })
  }
}