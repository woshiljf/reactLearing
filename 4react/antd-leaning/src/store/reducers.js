import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discoverMusic/sub-pages/remmend/store/index";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as songsReducer } from "../pages/discoverMusic/sub-pages/songs/store/index";

import { reducer as playListReducer } from '../pages/discoverMusic/sub-pages/playList/store/index'


export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  songs: songsReducer,
  playList: playListReducer
})
