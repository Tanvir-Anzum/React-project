import React from 'react';
import './takingHome.css'
const TakingHome = (props) => {
 const { background, fee, text, period, program, students } = props.ser
 return (
   <div>
     <div className='service'>
       <img id="pic" src={background} alt='' />
       <h2>{program}</h2>
       <h6>{fee}</h6>
       <h6>{text}</h6>
       <h6>{period}</h6>
       <h6>{fee}</h6>
       <h6>{students}</h6>
     </div>
   </div>
 )
};

export default TakingHome;