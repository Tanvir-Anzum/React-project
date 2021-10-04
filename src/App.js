import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NOtFound from './components/NotFound/NOtFound'

function App() {

  return (
     <BrowserRouter>
       <Switch>
         <Route path="/Home">
           <Home></Home>
         </Route>
         <Route>
           <NOtFound></NOtFound>
         </Route>
       </Switch>
       </BrowserRouter>
  
  )
}

export default App
