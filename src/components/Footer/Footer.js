import React from 'react';
import './footer.css'
const Footer = () => {
 return (
   <div>
     <div className='contains'>
       <div className='footer'>
         <div className='textElement'>
           <h2 className='header-two'>NEWSLETTER</h2>
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
     <div className='lowerPart'>
       <div className='pt-5 links'>
         <h3>Quick Links</h3>
         <ul>
           <li>Home</li>
           <li>About</li>
         </ul>
       </div>
       <div className='pt-5 phone'>
         <h3>Call Us</h3>
         <h5>( 0242 ) 9240233</h5>
         <h5>( 0244 ) 9240233</h5>
       </div>
     </div>
   </div>
 )
};

export default Footer;