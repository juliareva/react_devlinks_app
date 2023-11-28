import React, { useState, useEffect } from "react";
import Link from "./Link";

const CustomizeLinks = ({links, setLinks}) => {
  // const [links, setLinks] = useState([]);

  // useEffect(() => {
  //   const data = localStorage.getItem("dataKey");
  //   data == null ? setLinks([]) : setLinks(JSON.parse(data));
  // }, []);

  return (
    <div className="customise_container">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <input
        type="button"
        value="+ Add new link"
        onClick={() => setLinks([...links, {
          //platform:"github", url_text:""
        }
      ])}
      />

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
      </div>

      <input
        type="button"
        value="Save"
        onClick={() => {
          localStorage.setItem("dataKey", JSON.stringify(links));
        }}
      />
    </div>
  );
};

export default CustomizeLinks;
