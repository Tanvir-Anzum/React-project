import React from 'react'
import './NotFound.css'
const NOtFound = () => {
  return (
    // This component defines what will be donwe if the path doesnt match with a=the defined routes of "App.js"
    <div className='d-flex justify-content-center NotFound'>
      <div>
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  )
}

export default NOtFound
