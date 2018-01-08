import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {JournalEntry, UserHome} from './components'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={() => "main page"} />
        <Route path="/journal/:name" component={JournalEntry} />
        <Route path="/user/:name" component={UserHome} />
      </div>
    </Router>
  )
}

export default App
