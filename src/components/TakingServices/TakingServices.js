import React from 'react';
import './takingServices.css'
const TakingServices = (props) => {
 const { background, fee, text, period, program, students } = props.ser
 return (
   <div>
     <div>
       <div className='service'>
         <img src={background} alt='' />
         <h2>{program}</h2>
         <h6>{fee}</h6>
         <h6>{text}</h6>
         <h6>{period}</h6>
         <h6>{fee}</h6>
         <h6>{students}</h6>
       </div>
     </div>
   </div>
 )
};

export default TakingServices;