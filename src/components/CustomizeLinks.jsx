import React, { useState, useEffect, useRef } from "react";
import Link from "./Link";
import GetStarted from "./GetStarted";

const CustomizeLinks = ({ links, setLinks }) => {
  // const [links, setLinks] = useState([]);
  const [firstLanding, setFirstLanding] = useState(true);

  // useEffect(() => {
  //   const data = localStorage.getItem("dataKey");
  //   data == null ? setLinks([]) : setLinks(JSON.parse(data));
  // }, []);
  useEffect(() => {
    if (links.length > 0) {
      setFirstLanding(false);
    }
  }, [links]);

  const draggedOverLink = useRef(0);


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

      {firstLanding ? (
        <GetStarted />
      ) : (
        <>
          <div className="links">
            {links.map((link, index) => {
              return (
                // Why don't use just index as a key
                // More details here: https://stackoverflow.com/a/70944890
                <div key={index.toString() + link.url_text}>
                <Link
                draggedOverLink={draggedOverLink}
                  link={link}
                  idx={index + 1}
                  index={index}
                  links={links}
                  setLinks={setLinks}
                />
                 </div>
              );
            })}
          </div>
        </>
      )}

      <input
        type="button"
        value="Save"
        disabled={firstLanding}
        onClick={() => {
          localStorage.setItem("dataKey", JSON.stringify(links));
        }}
        className="btn_primary btn_save_links"
      />
    </div>
  );
};

export default CustomizeLinks;
