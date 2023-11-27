import React, { useState, useEffect } from "react";
import { ReactComponent as Drag_and_Drop } from "../assets/images/icon-drag-and-drop.svg";

const Link = ({idx, links, setLinks}) => {
    const [url_text, setUrlText] = useState(""); 
    const [touched, setTouched] = useState(false); 
    const [platform, setPlatform] = useState(""); 
    const [placeholder, setPlaceholder] = useState("Please add your link here"); 

    

const handleEmpty = (event) => {setUrlText(event.target.value);}

useEffect(() => {handlePlaceholder()}, [platform])

const handlePlaceholder = () => {
    switch(platform) {
        case "github":
            setPlaceholder("https://github.com/...")
          break;
        case "youtube":
            setPlaceholder("https://youtube.com/...")
          break;
          case "linkedin":
            setPlaceholder("https://linkedin.com/...")
          break;
          case "instagram":
            setPlaceholder("https://instagram.com/...")
          break;
          case "twitter":
            setPlaceholder("https://twitter.com/...")
          break;
          default:
            setPlaceholder(placeholder);
      }
}


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
          <input type="url" placeholder={placeholder} required onChange={handleEmpty} onFocus={() => {setTouched(true)}}/>
        {url_text.length < 1 && touched ? <p>Can't be empty</p> : ""}
        {url_text.length > 0 && !url_text.includes(platform) ? <p>Please check the URL</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Link;
