import React from 'react';
import Home from '../Home/Home';
const TakingHome = (props) => {
 const { background, fee, text, period, program, students } = props.ser
 return (
   <div>
     <div className='service'>
       <img src={background} alt='' />
       <h2>{program}</h2>
       <h4>{fee}</h4>
       <h4>{text}</h4>
       <h4>{period}</h4>
       <h4>{fee}</h4>
       <h4>{students}</h4>
     </div>
   </div>
 )
};

export default TakingHome;