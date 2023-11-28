import React from 'react'

const Mockup = ({links, profile}) => {
  return (
    <div className='mockup'>
        <div className="mockup_container">
        <div className="personal_info">
        <img src={`data:image/png;base64,${profile.avatar}`} alt="profile photo" />
        <h2>{(profile.first_name ? profile.first_name : "") + " " + (profile.last_name ? profile.last_name : "")}</h2>
        <h3>{profile.email ? profile.email : ""}</h3>
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