import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/app.jsx';

import store from "./redux/store";

function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
// 订阅监听，当使用store.dispatch进行事件分发时，会触发所订阅的函数
store.subscribe(render)
