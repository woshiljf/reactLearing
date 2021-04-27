import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";
// 使用react-redux插件来管理每个组件的store状态
// react-redux提供了Provider组件
import { Provider } from "react-redux";

console.log('小狗', store);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);



