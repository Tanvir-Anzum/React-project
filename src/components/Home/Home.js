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
  //  the following part consists of two parts : 1.the cards(every card shows a particular service) and 2. A form to get in touch with us
   <div>
     <div className='allServices'>
       {services.slice(0, 4).map((service) => (
         <TakingHome ser={service}></TakingHome>
       ))}
     </div>

   {/* Form starts here */}
     <div className='rightPart'>
       <h3>Stay Connected</h3>
       <div className='d-flex'>
         <div class='input-group input-group-lg w-50'>
           <input
             type='text'
             class='form-control'
             aria-label='Sizing example input'
             aria-describedby='inputGroup-sizing-lg'
             placeholder='First-name'
           ></input>
         </div>
         <div class='input-group input-group-lg w-50 mx-3'>
           <input
             type='text'
             class='form-control'
             aria-label='Sizing example input'
             aria-describedby='inputGroup-sizing-lg'
             placeholder='Last-name'
           ></input>
         </div>
       </div>
       <div className='d-flex'>
         <div class='input-group input-group-lg w-50'>
           <input
             type='text'
             class='form-control'
             aria-label='Sizing example input'
             aria-describedby='inputGroup-sizing-lg'
             placeholder='E-mail address'
           ></input>
         </div>
         <div class='input-group input-group-lg w-50 mx-3'>
           <input
             type='text'
             class='form-control'
             aria-label='Sizing example input'
             aria-describedby='inputGroup-sizing-lg'
             placeholder='Phone'
           ></input>
         </div>
       </div>
       <div className='form-floating mt-4'>
         <textarea
           class='form-control '
           placeholder='Leave a comment here'
           id='textAreaSize'
         ></textarea>
         <label for='floatingTextarea2'>Comments</label>
       </div>
     <div className="d-grid mt-3">
       <button type='button' class='btn button btn-lg'>
         SUBMIT
       </button>
     </div>
     </div>
   </div>
 )
}; 

export default Home;