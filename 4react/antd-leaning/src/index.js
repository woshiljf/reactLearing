import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/base.css";
import App from './App';
import {hot} from 'react-hot-loader';
const HotApp = hot(module)(App)
ReactDOM.render(
  <HotApp />
  ,
  document.getElementById('root')
);
