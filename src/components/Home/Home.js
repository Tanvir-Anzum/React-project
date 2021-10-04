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
   <div className='d-flex'>
     <div className='allServices'>
       {services.slice(0, 4).map((service) => (
         <TakingHome ser={service}></TakingHome>
       ))}
     </div>
     <div className='mt-5 pt-5'>
       <div class='input-group mb-3'>
         <button
           class='btn btn-primary'
           type='button'
           id='button-addon1'
         >
           Choose
         </button>
         <input
           type='text'
           class='form-control'
           placeholder='Choose Your Ser vi vce'
           aria-label=''
           aria-describedby='button-addon1'
         ></input>
       </div>

       <div class='input-group mb-3'>
         <input
           type='text'
           class='form-control'
           placeholder='Choose Branch'
           aria-label="Recipient's username"
           aria-describedby='button-addon2'
         ></input>
         <button class='btn btn-primary' type='button' id='button-addon2'>
           Choose
         </button>
       </div>

       <div class='input-group mb-3'>
         <button class='btn btn-primary' type='button'>
           Enroll
         </button>
         <input
           type='text'
           class='form-control'
           placeholder='Click Here to Enroll'
           aria-label='Example text with two button addons'
         ></input>
       </div>
     </div>
   </div>
 )
}; 

export default Home;