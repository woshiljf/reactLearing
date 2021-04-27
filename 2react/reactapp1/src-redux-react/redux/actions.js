import { DECREMENT, INCREMENT } from "./action-type";

export const incrementCreator = (number) => ({ type: INCREMENT, data: number })
export const decrementCreator = (number) => ({ type: DECREMENT, data: number })

// redux里的异步操作,返回的不是一个对象，而是一个函数
// 异步的方式，最终还是调用同步的方法去修改store中的状态，和vuex中的actions一样的道理。
// ajax请求，都放在这里去获取
export const incrementAsync = (number) => {

  return (dispatch) => {

    setTimeout(() => {

      dispatch(incrementCreator(number))

    }, 1000);


  }


}