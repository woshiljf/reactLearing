import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discoverMusic/sub-pages/remmend/store/index";
import { reducer as playerReducer } from "../pages/player/store";
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})
