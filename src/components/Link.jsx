import React, { useState } from "react";
import { ReactComponent as Drag_and_Drop } from "../assets/images/icon-drag-and-drop.svg";

const Link = ({idx, links, setLinks}) => {
    const [alert, setAlert] = useState(""); 
    const [touched, setTouched] = useState(false); 
    const [platform, setPlatform] = useState(""); 

const handleEmpty = (event) => {setAlert(event.target.value);}

  return (
    <div>
      <div className="link">
        <div className="link_header">
          <Drag_and_Drop />
          <h2>Link #{idx}</h2>
          <input type="button" value="Remove" onClick={() => setLinks(links.toSpliced((idx -1), 1))}/>
        </div>

        <div className="link_body">
          <label for="platforms">Platform</label>

          <select name="platforms" id="platforms" value={platform} onChange={(e) => {
              setPlatform(e.target.value);
            }} >
            <option value="github">Github</option>
            <option value="youtube">Youtube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
          </select>

          <label for="link">Link</label>
          <input type="url" placeholder="Link placeholder here" required onChange={handleEmpty} onFocus={() => {setTouched(true)}}/>
        {alert.length < 1 && touched ? <p>Can't be empty</p> : ""}
        {alert.length > 0 && !alert.includes("github") ? <p>Please check the URL</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Link;
