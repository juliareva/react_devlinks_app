import Links from "./pages/Links";
import {Routes, Route} from "react-router-dom"
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Links /> */}
    </div>
  );
}

export default App;
