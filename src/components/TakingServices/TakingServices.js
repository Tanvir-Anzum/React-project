import React from 'react';
import './takingServices.css'
const TakingServices = (props) => {
 const { background, fee, text, period, program, students } = props.ser
 return (
   <div>
     <div className='service'>
       <img id='pic' src={background} alt='' />
       <h3 className='ms-3'>Program : {program}</h3>
       <p className='ms-3'>{text}</p>
       <p className='ms-3'>Period : {period}</p>
       <hr />
       <div className='d-flex'>
         <h6 className='ms-3'>Students : {students}</h6>
         <h6 className='ms-3'>Fee : {fee}</h6>
       </div>
     </div>
   </div>
 )
};

export default TakingServices;