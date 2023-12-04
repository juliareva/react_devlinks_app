import React, { useState, useEffect } from "react";

//icons
import { ReactComponent as Drag_and_Drop } from "../assets/images/icon-drag-and-drop.svg";

const Link = ({ idx, links, setLinks, link }) => {
  const [url_text, setUrlText] = useState(link.url_text ? link.url_text : "");
  const [touched, setTouched] = useState(false);
  const [platform, setPlatform] = useState(link.platform ? link.platform : "");
  const [placeholder, setPlaceholder] = useState("Please add your link here");

  const handleEmpty = (event) => {
    setUrlText(event.target.value);
  };

  useEffect(() => {
    handlePlaceholder();
    handlePlatform();
  }, [platform]);

  useEffect(() => {
    handleUrlText();
  }, [url_text]);

  const handlePlaceholder = () => {
    switch (platform) {
      case "github":
        setPlaceholder("https://github.com/...");
        break;
      case "youtube":
        setPlaceholder("https://youtube.com/...");
        break;
      case "linkedin":
        setPlaceholder("https://linkedin.com/...");
        break;
      case "instagram":
        setPlaceholder("https://instagram.com/...");
        break;
      case "twitter":
        setPlaceholder("https://twitter.com/...");
        break;
      case "gitlab":
        setPlaceholder("https://gitlab.com/...");
        break;
      case "codewars":
        setPlaceholder("https://codewars.com/...");
        break;
      case "twitch":
        setPlaceholder("https://twitch.com/...");
        break;
      case "facebook":
        setPlaceholder("https://facebook.com/...");
        break;
      default:
        setPlaceholder(placeholder);
    }
  };

  const handlePlatform = () => {
    let newLinks = [...links];
    newLinks[idx - 1].platform = platform;
    setLinks(newLinks);
  };

  const handleUrlText = () => {
    let newLinks = [...links];
    newLinks[idx - 1].url_text = url_text;
    setLinks(newLinks);
  };

  return (
      <div className="link">
        <div className="link_header">
          <div className="link_name">
            <Drag_and_Drop />
            <h2 className="heading_s">Link #{idx}</h2>
          </div>
          <input
            type="button"
            value="Remove"
            onClick={() => setLinks(links.toSpliced(idx - 1, 1))}
            className="body_m"
          />
        </div>

          <div className="link_platform">
            <label for="platforms" className="body_s">Platform</label>

            <select
              name="platforms"
              id="platforms"
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value);
              }}
            >
              <option value="github">Github</option>
              <option value="gitlab">Gitlab</option>
              <option value="codewars">Codewars</option>
              <option value="twitter">Twitter</option>
              <option value="twitch">Twitch</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">Youtube</option>
              <option value="instagram">Instagram</option>
              <option value="codewars">Facebook</option>
            </select>
          </div>

          <div className="link_url_wrapper">
            <label for="link" className="body_s">Link</label>
            <input
              type="url"
              placeholder={placeholder}
              required
              onChange={handleEmpty}
              value={url_text}
              onFocus={() => {
                setTouched(true);
              }}
            />
            {url_text.length < 1 && touched ? (
              <p className="alert">Can't be empty</p>
            ) : (
              ""
            )}
            {url_text.length > 0 && !url_text.includes(platform) ? (
              <p className="alert">Please check the URL</p>
            ) : (
              ""
            )}
          </div>
      </div>
  );
};

export default Link;
