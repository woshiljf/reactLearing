import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less';

import App from './App';
import { ConfigProvider } from 'antd';

ReactDOM.render(

  <ConfigProvider locale={zhCN}>
    <App />,
  </ConfigProvider>,

  document.getElementById('root')
);


