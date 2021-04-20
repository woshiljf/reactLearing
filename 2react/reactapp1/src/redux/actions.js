import { DECREMENT, INCREMENT } from "./action-type";

export const incrementCreator = (number) => ({ type: INCREMENT, data: number })
export const decrementCreator = (number) => ({ type: DECREMENT, data: number })

// redux里的异步操作,返回的不是一个对象，而是一个函数

export const incrementAsync = (number) => {

  return (dispatch) => {

    setTimeout(() => {
      dispatch(incrementCreator(number))
    }, 1000);


  }


}