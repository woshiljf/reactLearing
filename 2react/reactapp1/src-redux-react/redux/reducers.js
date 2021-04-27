import { INCREMENT, DECREMENT } from "./action-type";


export function counter (state = 0, action) {

  console.log(state, action);

  switch (action.type) {

    case INCREMENT:
      return state + action.data

    case DECREMENT:

      return state - action.data

    default:

      return state
  }








}