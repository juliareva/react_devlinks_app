import React from 'react'
import { Link } from "react-router-dom";

const EmptyMockup = () => {
  return (
    <div className='empty_mockup'>
      <h1 className='body_m'>Complete your profile to personalize your experience.</h1>
    <Link className="btn_primary" to="/profile">Add your info now!</Link>
    </div>
  )
}

export default EmptyMockup