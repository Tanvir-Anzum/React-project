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
   <div>
     <div className='allServices'>
       {services.slice(0, 4).map((service) => (
         <TakingHome ser={service}></TakingHome>
       ))}
     </div>
   <div className="contains">
     <div className='footer'>
       <div className='textElement'>
         <h2 className="header-two">NEWSLETTER</h2>
       </div>
       <div class='input-group w-50'>
         <input
           type='text'
           class='form-control'
           aria-label='Dollar amount (with dot and two decimal places)'
         ></input>

         <button type='button' class='btn btn-primary btn-lg'>
           Large button
         </button>
         </div>
         </div>
         </div>
         <div className="lowerPart">
          <div className="pt-5 links">
           <h3>Quick Links</h3>
           <ul>
             <li>Home</li>
             <li>About</li>
           </ul>
           </div>
           <div className="pt-5 phone">
             <h3>Call Us</h3>
             <h5>( 0242 ) 9240233</h5>
             <h5>( 0244 ) 9240233</h5>
           </div>
     </div>
   </div>
 )
}; 

export default Home;