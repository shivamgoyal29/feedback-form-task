import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import NewFormDashboard from "./components/NewFormDashBoard";

function App() {
  const formDashboardRef = useRef(null);

  const handleSaveFromNavbar = (publish = false) => {
    if (formDashboardRef.current) {
      formDashboardRef.current.handleSaveFrom({ publish });
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar onSave={handleSaveFromNavbar} />
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/create-form"
            element={<NewFormDashboard ref={formDashboardRef} />}
          />
          <Route path="/" element={<Dashboard />} />{" "}
          {/* Optional default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
