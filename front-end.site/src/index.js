import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LoginForm from './components/LoginForm'
import Login from './views/login'
import Profile from './views/profile'
import Home from './views/home'
import Page from './views/page'
import SignUp from './views/sign-up'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Login} path="/login" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={Page} path="/page" />
        <Route exact component={SignUp} path="/sign-up" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
