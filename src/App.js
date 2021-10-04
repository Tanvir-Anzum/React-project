import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/Home/Home'

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./care.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div>
      <div className="allServices">
      {services.map((service) => (
        <Home ser={service}></Home>
      ))}
      </div>
    </div>
  )
}

export default App
