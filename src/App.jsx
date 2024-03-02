import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealState from "./pages/RealState";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nearby_agents" element={<RealState />} />
        {/* Include route parameter placeholders for dynamic segment */}
        <Route path="/profile/:name/:pincode/:location" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
