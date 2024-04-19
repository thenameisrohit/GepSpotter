import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import ProfileDetailsPage from "./pages/ProfileDetailsPage";
import AdminPanel from "./pages/AdminPanel";
import "./styles.css";
import VideoBackground from "./components/VideoBackground";

export default function App() {
  return (
    // <div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetailsPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
    // </div>
  );
}

// export default App;
