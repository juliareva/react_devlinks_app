import React from 'react'
import get_started_img from '../assets/images/illustration-empty.svg'

const GetStarted = () => {
  return (
    <div className='get_started'>
        <img src={get_started_img} />
        <h2 className='heading_m'>Let's get you started</h2>
        <p className='body_m'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
    </div>
  )
}

export default GetStarted