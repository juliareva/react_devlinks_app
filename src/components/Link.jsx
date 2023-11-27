import React from "react";
import { ReactComponent as Drag_and_Drop } from "../assets/images/icon-drag-and-drop.svg";

const Link = ({idx, links, setLinks}) => {
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

          <select name="platforms" id="platforms">
            <option value="github">Github</option>
            <option value="youtube">Youtube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
          </select>

          <label for="link">Link</label>
          <input type="url" placeholder="Link placeholder here" required />
        </div>
      </div>
    </div>
  );
};

export default Link;
