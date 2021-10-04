import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoffee, faMap} from '@fortawesome/free-solid-svg-icons'
import './contact.css'
const COntact = () => {
const element = <FontAwesomeIcon icon={faMap} />
 return (
   <div className='parent'>
     <div className='first'>
       <img
         id='phone'
         src='https://cdn-icons-png.flaticon.com/512/3616/3616215.png'
         alt=''
       />
       <h3>Call us</h3>
       <h4>( 0544 ) 8435803</h4>
       <h4>( 0384) 2742681</h4>
     </div>
     <div className='segment'>
       <img
         className='location'
         src='https://media.istockphoto.com/photos/red-map-pointer-isolated-on-white-background-picture-id1182235539?b=1&k=20&m=1182235539&s=170667a&w=0&h=_lwpU3YmqsgIhaDlbPtnWeIzmJovYJMvJyjs_2hR5Wg='
         alt=''
       />
       <h3>Address</h3>
       <h4>400 Niazpur</h4>
       <h4>231 Syhlet 234</h4>
     </div>
   </div>
 )
};

export default COntact;