import React, { useEffect, useState } from 'react';
import TakingServices from '../TakingServices/TakingServices';
import './services.css'
const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
     fetch('./care.JSON')
       .then((res) => res.json())
       .then((data) => setServices(data))
   }, [])
 return (
  
  // This component shows all the cards(or services)
     <div className="allService">
      {services.map((service) => (
        <TakingServices ser={service}></TakingServices>
      ))}
      </div>
 );
};

export default Services;