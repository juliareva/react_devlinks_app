import React from 'react'
import { Link } from "react-router-dom";

const EmptyMockup = () => {
  return (
    <div>
      <h2>Complete your profile to personalize your experience.
        <Link to="/profile">Add your info now!</Link></h2>
    </div>
  )
}

export default EmptyMockup