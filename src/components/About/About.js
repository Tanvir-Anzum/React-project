import React from 'react'
import './about.css'
const About = () => {
  return (
    //  A brief Description of our school is generate here
    <div className='main'>
      <div>
        <img
          id='kid'
          src='https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80'
          alt=''
        />
      </div>
      <div className='points'>
        <h1>Great Learning Platform</h1>
        <div>
          <h3>Special Education</h3>
          <h5>
            We have a different style of teaching.We believe this is unique
          </h5>
        </div>
        <div>
          <h3>Importance on Sports</h3>
          <h5>
            We not only care about education but also their physical health
          </h5>
        </div>
        <div>
          <h3>Moral Education</h3>
          <h5>We want our students to have good morals and characters</h5>
        </div>
      </div>
    </div>
  )
}

export default About
