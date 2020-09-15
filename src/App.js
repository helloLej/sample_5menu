import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import logo from './logo.svg'
import Layout from './common/Layout'
import Header from './component/Header/Header'
import Todo from './component/Todo/Todo'
import Grid from './component/Grid/Grid'
import Modal from './component/Modal/Modal'
import CounterContainer from './container/CounterContainer'
import Async from './component/Async/Async'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Layout exact path="/" component={Todo} title="Todo" />
          <Layout exact path="/grid" component={Grid} title="Grid" />
          <Layout exact path="/modals" component={Modal} title="Modals" />
          <Layout
            exact
            path="/counter"
            component={CounterContainer}
            title="Counter"
          />
          <Layout exact path="/async" component={Async} title="Async Actions" />
        </Switch>
      </Router>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

export default App
