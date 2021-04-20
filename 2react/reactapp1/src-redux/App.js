import React, { Component } from 'react'

import { Button, Toast } from "antd-mobile";

// import { INCREMENT, DECREMENT } from "./redux/action-type";

import * as actions from "./redux/actions";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    Toast.fail('Load failed !!!', 1);
  }
  incretement = () => {

    var number = this.select.value - 0
    // const { count } = this.state
    // this.setState({
    //   count: count + number
    // })
    const { store } = this.props
    store.dispatch(
      actions.incrementCreator(number)
    )
  }

  decretement = () => {

    var number = this.select.value - 0
    // const { count } = this.state
    // this.setState({
    //   count: count + number
    // })
    const { store } = this.props
    store.dispatch(
      actions.decrementCreator(number)
    )

  }

  render () {
    const count = this.props.store.getState()
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

        </div>
      </div>
    )

  }

}

export default App;