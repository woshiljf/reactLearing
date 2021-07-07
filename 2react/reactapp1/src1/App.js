import React, { Component } from 'react'
import ReactDOM from 'react';
import { Button, Toast } from "antd-mobile";

// import { INCREMENT, DECREMENT } from "./redux/action-type";

import * as actions from "./redux/actions";
import Main from './components/main'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('大海狗', props);
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    Toast.fail('Load failed !!!', 1);
  }
  incretement = () => {

    var number = this.select.value - 0
    const { store } = this.props
    // console.log(this.props);
    store.dispatch(
      actions.incrementCreator(number)
    )
    // console.log(store);
    // console.log(store.getState());
    this.setState({
      count: store.getState()
    })
  }

  componentDidMount () {
    console.log('da', this.props);
  }
  decretement = () => {

    var number = this.select.value - 0
    const { store } = this.props
    // store.dispatch(
    //   actions.decrementCreator(number)
    // )

  }
  unload = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    // ReactDOM.unmountComponentAtNode()
    // console.log(ReactDOM);
  }

  render () {
    const count = this.state.count
    return (

      <div className="App">

        <h1>{count}</h1>
        <div className="button">

          <select ref={(select) => this.select = select}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>

          <Button type="primary" size="small" className="incretement" onClick={this.incretement}>增加</Button>

          <Button type="primary" size="small" className="incretement" onClick={this.decretement}>减少</Button>
          <Main></Main>
          <button onClick={this.unload}>卸载</button>
        </div>
      </div>
    )

  }

}

export default App;
