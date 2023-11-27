import React, { useState } from "react";
import Link from "../components/Link";

const CustomizeLinks = () => {
  const [links, setLinks] = useState([]);

  return (
    <>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <input
        type="button"
        value="+ Add new link"
        onClick={() => setLinks([...links, {}])}
      />

      <div className="links">
        {links.map((link, index) => {
          return <Link link={link} idx={index +1} links={links} setLinks={setLinks} />;
        })}
      </div>

      <input type="button" value="Save" />
    </>
  );
};

export default CustomizeLinks;
