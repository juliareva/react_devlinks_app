import React from "react";
import Navbar from "../components/Navbar";
import Mockup from "../components/Mockup";

const Profile = ({ links, setLinks, profile, setProfile }) => {
  const handleFirstName = (event) => {
    setProfile({ ...profile, first_name: event.target.value });
  };
  const handleLastName = (event) => {
    setProfile({ ...profile, last_name: event.target.value });
  };
  const handleEmail = (event) => {
    setProfile({ ...profile, email: event.target.value });
  };

  // Image upload

  const imageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const avatar = reader.result.replace("data:", "").replace(/^.+,/, "");
      //localStorage.setItem("avatar", base64StringUS);
      //const avatar = localStorage.getItem("avatar");
      setProfile({ ...profile, avatar: avatar });
      //   var bannerImg = document.getElementById("tableBanner");
      //   bannerImg = document.getElementById('tableBanner');
      //   bannerImg.src = "data:image/png;base64," + avatar;
      //document.body.style.background = `url(data:image/png;base64,${base64StringUS})`;
    };
    reader.readAsDataURL(file);
  };

  const imageDelete = (e) => {
    setProfile({ ...profile, avatar: null });
  };

  return (
    <div>
      <Navbar />
      <div className="profile_page main_container">
        <Mockup links={links} setLinks={setLinks} profile={profile} />
        <div className="profile_container">
          <div className="profile_header">
            <h1 className="heading_m">Profile Details</h1>
            <p className="body_m">
              Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className="profile_picture">
            <label htmlFor="avatar">Profile Picture</label>

            <input
            className="upload_avatar"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={imageUpload}
            />
            {profile.avatar ? <img className="user_avatar" src={`data:image/png;base64,${profile.avatar}`} /> : ""} 
            <span className="body_s">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </span>
            <button className="delete_profile_img" onClick={imageDelete}>Delete</button>
          </div>

          <form className="user_info">
            <div className="form_first_name">
              <label htmlFor="first_name">First Name*</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                onChange={handleFirstName}
                value={profile.first_name ? profile.first_name : ""}
                placeholder="e.g. John"
              />
            </div>

            <div className="form_last_name">
              <label htmlFor="last_name">Last Name*</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                onChange={handleLastName}
                value={profile.last_name ? profile.last_name : ""}
                placeholder="e.g. Smith"
              />
            </div>

            <div className="form_email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email ? profile.email : ""}
                onChange={handleEmail}
                placeholder="e.g. email@example.com"
              />
            </div>
            
          </form>
          <input
            className="btn_primary save_form"
            type="submit"
            value="Save"
            onClick={() => {
              localStorage.setItem("profileKey", JSON.stringify(profile));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
