import { ADDCOMMENT, DELETECOMMENT, RECVECOMMENTS } from "./action-types";
import { combineReducers } from 'redux'

function comments (state = [], action) {

  switch (action.type) {
    case ADDCOMMENT:
      return [action.data, ...state]
    case DELETECOMMENT:
      return state.filter((item, index) => index !== action.data)
    case RECVECOMMENTS:
      return action.data
    default:
      return state
  }

}

export function counter (state = 1111, action) {

  console.log(state, action);

  switch (action.type) {

    case '1':
      return state + action.data

    case '2':

      return state - action.data

    default:

      return state
  }

}

export default combineReducers({

  comments,
  counter

})