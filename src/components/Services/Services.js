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
  
     <div className="allServices">
      {services.map((service) => (
        <TakingServices ser={service}></TakingServices>
      ))}
      </div>
 );
};

export default Services;