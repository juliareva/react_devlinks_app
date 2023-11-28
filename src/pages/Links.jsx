import React, { useState, useEffect } from "react";
import CustomizeLinks from "../components/CustomizeLinks";
import Navbar from "../components/Navbar";
import Mockup from "../components/Mockup";

const Links = ({links, setLinks, profile}) => {

    // const [links, setLinks] = useState([]);

    // useEffect(() => {
    //   const data = localStorage.getItem("dataKey");
    //   data == null ? setLinks([]) : setLinks(JSON.parse(data));
    // }, []);

  return (
    <div>
      <Navbar />
      <div className="main_container">
      <Mockup 
      links={links}
      setLinks={setLinks}
      profile={profile}/>
      <CustomizeLinks
      links={links} setLinks={setLinks} />
      </div>
      
    </div>
  );
};

export default Links;
