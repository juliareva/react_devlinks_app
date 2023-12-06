import React, { useState, useEffect } from "react";
import Link from "./Link";
import GetStarted from "./GetStarted";

const CustomizeLinks = ({ links, setLinks }) => {
  // const [links, setLinks] = useState([]);

  // useEffect(() => {
  //   const data = localStorage.getItem("dataKey");
  //   data == null ? setLinks([]) : setLinks(JSON.parse(data));
  // }, []);

  return (
    <div className="customise_container">

      <div className="customize_wrapper">
        <h2 className="heading_m">Customize your links</h2>
        <p className="body_m">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <input
          type="button"
          value="+ Add new link"
          className="btn_secondary"
          onClick={() =>
            setLinks([
              ...links,
              {
                //platform:"github", url_text:""
              },
            ])
          }
        />
      </div>

      {links.length < 1 ? <GetStarted /> : 
      <>
      <div className="links">
        {links.map((link, index) => {
          return (
            <Link
              link={link}
              idx={index + 1}
              links={links}
              setLinks={setLinks}
            />
          );
        })}
      </div></>}

      <input
        type="button"
        value="Save"
        onClick={() => {
          localStorage.setItem("dataKey", JSON.stringify(links));
        }}
        className="btn_primary btn_save_links"
      /> 
    </div>
  );
};

export default CustomizeLinks;
