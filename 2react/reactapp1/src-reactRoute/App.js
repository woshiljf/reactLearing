import logo from './logo.svg';
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import About from './components/About'
import Like from './components/Like'
import Home from './components/Home'
import MyNavLink from './components/NavLink'
// const About = React.lazy(_ => import("./components/About/index.jsx"));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '龙小狗'
    }
  }
  render () {

    return (

      <div className="App">
        <div className="sideBar" >
          <ul>
            <li className="navaItem">
              <MyNavLink to="/home">主页</MyNavLink>
            </li>
            <li className="navaItem">
              <MyNavLink to="/about">关注</MyNavLink>
            </li>
            <li className="navaItem">
              <MyNavLink to="/like">喜欢</MyNavLink>
            </li>
          </ul>
        </div>

        <div className="main">
          <Switch>

            <Route path="/about" component={About}>
            </Route>

            <Route path="/like">
              <Like />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Redirect to="/home"></Redirect>

          </Switch>
        </div>


      </div>

    )


  }


}




export default App;
