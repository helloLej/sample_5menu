import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './common/Layout'
import Header from './component/Header'
import Todo from './component/Todo'
import Grid from './component/Grid'
import Modal from './component/Modal'
import CounterContainer from './container/CounterContainer'
import Async from './component/Async'

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
    </div>
  )
}

export default App
