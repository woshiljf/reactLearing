import React from 'react'

import { connect } from "react-redux";

import App from '../components/count/index'
import './App.css'
import { incrementCreator, decrementCreator, incrementAsync } from "../redux/actions";


// 这里比较敲门的地方就算，受用connent函数，建立组件之间与 store的连接
export default connect(
  state => ({ count: state }),

  {
    increment: incrementCreator,
    decrement: decrementCreator,
    incrementAsync: incrementAsync
  }



)(App);