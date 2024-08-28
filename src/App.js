import React from "react";
import "./styles/App.css";
import CustomRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <CustomRoutes />
    </Router>
  );
}

export default App;
