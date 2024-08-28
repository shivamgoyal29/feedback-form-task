import React, { useEffect, useRef, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import NewFormDashboard from "./components/NewFormDashBoard";
import CenteredModalDisplay from "./components/CenteredModalDisplay";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase/firebase-config";
import FeedbackDataDisplay from "./components/FeedbackDataDisplay";
import WebsiteApp from "./website/WebsiteApp";
import About1 from "./website/About1";
import Services from "./website/Services";
import Contact from "./website/Contact";
import Home from "./website/Home";

const CustomRoutes = () => {
  const location = useLocation();
  const [refreshKey, setRefreshKey] = useState(0);
  const formDashboardRef = useRef(null);

  const handleSaveFromNavbar = (publish = false) => {
    if (formDashboardRef.current) {
      formDashboardRef.current.handleSaveFrom({ publish });
    }
  };

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  const isAdminRoute = location.pathname.startsWith("/admin");
  console.log(isAdminRoute);

  return (
    <div className="app">
      {isAdminRoute && <Navbar onSave={handleSaveFromNavbar} />}
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route
          path="/admin/create-form"
          element={
            <NewFormDashboard
              ref={formDashboardRef}
              onFormSaved={handleRefresh}
            />
          }
        />
        <Route
          path="/admin/feedback-data/:formID"
          element={<FeedbackDataDisplay />}
        />
        <Route path="/website/" element={<WebsiteApp />} />
        <Route path="website/home" element={<CenteredModalDisplay />} />
        <Route path="/website/about" element={<CenteredModalDisplay />} />
        <Route path="website/services" element={<Services />} />
        <Route path="/website/contact" element={<Contact />} />
        <Route path="" element={<CenteredModalDisplay />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
