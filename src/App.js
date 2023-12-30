import Links from "./pages/Links";
import React, { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import Signup from "./pages/SignUp";

function App() {

  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const data = localStorage.getItem("dataKey");
    data == null ? setLinks([]) : setLinks(JSON.parse(data));
    const profileData = localStorage.getItem("profileKey");
    profileData == null ? setProfile({}) : setProfile(JSON.parse(profileData));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Links links={links} profile={profile}
      setLinks={setLinks}/>} />
        <Route path="/profile" element={<Profile links={links}
      setLinks={setLinks} profile={profile} setProfile={setProfile}/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
