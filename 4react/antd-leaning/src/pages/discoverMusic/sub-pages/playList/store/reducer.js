import { Map } from 'immutable'

import * as actionTypes from './action-types'

const defaultState = Map({

  playListDetail: {},
  playListComment: {}

})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAYLIST:
      // 歌单信息
      return state.set('playListDetail', action.playList)
    // 歌单评论
    case actionTypes.CHAGE_PLAYLIST_COMMENT:
      return state.set('playListComment', action.playListComment)
    default:
      return state
  }
}