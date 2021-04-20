import React, { Component } from 'react'

import { Button } from "antd-mobile";

import Protypes from 'prop-types'

class Count extends Component {
  // 通过组件传值的方式
  static protypes = {
    count: Protypes.number.isRequired,
    increment: Protypes.func.isRequired,
    decrement: Protypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incretement = () => {

    var number = this.select.value - 0
    this.props.increment(number)

  }

  decretement = () => {

    var number = this.select.value - 0
    this.props.decrement(number)
  }

  render () {
    const { count } = this.props
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

export default Count