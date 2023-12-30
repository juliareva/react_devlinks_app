import React from "react";
import mockup_bg from "../assets/images/illustration-phone-mockup.svg";
import mockup_bg_empty from "../assets/images/illustration-phone-mockup-empty.svg";
import arrow from "../assets/images/icon-arrow-right.svg";
// Platform icons
import { ReactComponent as Github_icon } from "../assets/images/icon-github.svg";
import { ReactComponent as Gitlab_icon } from "../assets/images/icon-gitlab.svg";

const Mockup = ({ links, profile }) => {
  const linksBgColor = [
    "#1A1A1A",
    "#EE3939",
    "#2D68FF",
    "#333333",
    "#8A1A50",
    "#302267",
  ];

  // const linksBgColor = ""
  // switch (linksBgColor) {
  //     case "github":
  //         linksBgColor = "#1A1A1A";
  //       break;
  //     case "youtube":
  //       linksBgColor = "#EE3939";
  //       break;
  // case "linkedin":
  //   linksBgColor = "";
  //   break;
  // case "instagram":
  //    linksBgColor = "";
  //   break;
  // case "twitter":
  //   setPlaceholder("https://twitter.com/...");
  //   break;
  // case "gitlab":
  //   setPlaceholder("https://gitlab.com/...");
  //   break;
  // case "codewars":
  //   setPlaceholder("https://codewars.com/...");
  //   break;
  // case "twitch":
  //   setPlaceholder("https://twitch.com/...");
  //   break;
  // case "facebook":
  //   setPlaceholder("https://facebook.com/...");
  //   break;
  // default:
  //   setPlaceholder(placeholder);
  //}

  const getAdjustedHref = (url_text) => {
    if (url_text.startsWith("https://") || url_text.startsWith("http://")) {
      return url_text;
    } else {
      return "//" + url_text;
    }
  };

  const getPlatformIcon = (platform) => {
    let platformIcon = null;
    switch (platform) {
      case "github":
        platformIcon = <Github_icon />;
        break;
      case "gitlab":
        platformIcon = <Gitlab_icon />;
        break;
      default:
        break;
    }
    return platformIcon;
  };

  return (
    <div
      className="mockup"
      //   style={{
      //     backgroundImage: `url(${mockup_bg_empty})`,
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <div className="mockup_container">
        {/* <img id="mockup_phone" src={mockup_bg_empty} /> */}

        <div className="personal_info">
          <img
            src={`data:image/png;base64,${profile.avatar}`}
            alt="profile photo"
          />
          <h2 className="mockup_name">
            {(profile.first_name ? profile.first_name : "") +
              " " +
              (profile.last_name ? profile.last_name : "")}
          </h2>
          <h3 className="body_m">{profile.email ? profile.email : ""}</h3>
        </div>

        <div className="mockup_links">
          {links.map((link, index) => {
            return (
              <a href={getAdjustedHref(link.url_text)} target="_blank">
                <p
                  className="body_m"
                  style={{ backgroundColor: linksBgColor[index % 6] }}
                >
                  {getPlatformIcon(link.platform) != null
                    ? getPlatformIcon(link.platform)
                    : ""}
                  {link.platform} <img src={arrow} />
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mockup;
