
// redux用上中间介,applyMiddleware
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// redux状态调试工具的使用
import { composeWithDevTools } from "redux-devtools-extension";

// 创建一个store对象，createStore,
// createStore,需要传入一个reducer，这里有一个问题是，当需要传入多个reducer的情况，需要进一步了解

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store