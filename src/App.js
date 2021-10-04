import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NOtFound from './components/NotFound/NOtFound'
import Services from './components/Services/Services'
import Header from './components/Header/Header'
import COntact from './components/Contact/COntact'
import About from './components/About/About'


function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/Home'>
          <Home></Home>
        </Route>
        <Route exact path='/Services'>
          <Services></Services>
        </Route>
        <Route path='/Contact'>
          <COntact></COntact>
        </Route>
        <Route path='/About'>
          <About></About>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NOtFound></NOtFound>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
