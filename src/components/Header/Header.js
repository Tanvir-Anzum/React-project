import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './header.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
const Header = () => {
 return (
   <div>
  
     <nav class='navbar navbar-expand-lg navbar-light bg-light'>
       <div class='container-fluid'>
         <button
           class='navbar-toggler'
           type='button'
           data-bs-toggle='collapse'
           data-bs-target='#navbarTogglerDemo01'
           aria-controls='navbarTogglerDemo01'
           aria-expanded='false'
           aria-label='Toggle navigation'
         >
           <span class='navbar-toggler-icon'></span>
         </button>
         <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
           <Link to='/Home' className='navbar-brand'>
             Home
           </Link>
           <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
             <li class='nav-item'>
               <Link to='Services' className='nav-link active'>
                 Services
               </Link>
             </li>
             <li class='nav-item'>
               <Link to='About' className='nav-link active'>
                 About
               </Link>
             </li>
             <li class='nav-item'>
               <Link to='COntact'  className='nav-link active'>
                 Contact
               </Link>
             </li>
           </ul>
           <form class='d-flex'>
             <input
               class='form-control me-2'
               type='search'
               placeholder='Search'
               aria-label='Search'
             ></input>
             <button class='btn btn-outline-success' type='submit'>
               Search
             </button>
           </form>
         </div>
       </div>
     </nav>

     <img
       src='https://images.unsplash.com/photo-1541535193313-a132e126fb1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80'
       alt=''
     />
   </div>
 )
};

export default Header;