import React, { useEffect, useState } from 'react';
import TakingHome from '../TakingHome/TakingHome';
import './home.css';

const Home = (props) => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('./care.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
 return (
   <div className="service">
      <div className="allServices">
      {services.map((service) => (
        <TakingHome ser={service}></TakingHome>
      ))}
      </div>
    </div>
 )
}; 

export default Home;