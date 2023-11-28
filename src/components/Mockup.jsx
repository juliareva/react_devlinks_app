import React from 'react'

const Mockup = ({links, setLinks}) => {
  return (
    <div className='mockup'>
        <div className="mockup_container">
        <div className="personal_info">
        <img src="" alt="profile_pic"/>
        <h2>Name Name</h2>
        <h3>email@email.com</h3>
        </div>

        <div className="mockup_links">
        {links.map((link) => {
          return (
            <p>{link.platform}</p>
          );
        })}
        </div>   
        </div> 
    </div>
  )
}

export default Mockup