
// redux用上中间介,applyMiddleware
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counter } from "./reducers";
// 创建一个store对象，createStore,
// createStore,需要传入一个reducer，这里有一个问题是，当需要传入多个reducer的情况，需要进一步了解

const store = createStore(
  counter,
  applyMiddleware(thunk)  // 使用thunk中间件，redux进行异步编程
)

export default store