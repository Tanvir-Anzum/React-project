import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faPhoneSquareAlt, faEnvelope,
  faMapMarkerAlt, faClock} from '@fortawesome/free-solid-svg-icons'
import './contact.css'
const COntact = () => {

 return (
  //  works on contact information
   <div className='parent'>
     <div className='segment first p-3'>
       <span>
         <FontAwesomeIcon id='phone' icon={faPhoneSquareAlt} />
       </span>
       <h3>Call us</h3>
       <h4>( 0544 ) 8435803</h4>
       <h4>( 0384) 2742681</h4>
     </div>
     <div className='segment second p-3'>
       <span>
         <FontAwesomeIcon id='location' icon={faMapMarkerAlt} />
       </span>
       <h3>Address</h3>
       <h4>400 Niazpur</h4>
       <h4>231 Syhlet 234</h4>
     </div>
     <div className='segment third p-3'>
       <span>
         <FontAwesomeIcon id='mail' className='mail' icon={faEnvelope} />
       </span>
       <h3>Mail Us</h3>
       <h4>info@funschool.com</h4>
       <h4>info@ourschool.com</h4>
     </div>
     <div className='segment fourth p-3'>
       <span>
         <FontAwesomeIcon id='openHours' icon={faClock} />
       </span>
       <h3>Open Hours</h3>
       <h4>Sat to Thu</h4>
       <h4>Fri : closed</h4>
     </div>
   </div>
 )
};

export default COntact;