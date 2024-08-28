import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About1 from "./About1";

function WebsiteApp() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link> {/* Relative path */}
        </li>
        <li>
          <Link to="about">About</Link> {/* Relative path */}
        </li>
        <li>
          <Link to="services">Services</Link> {/* Relative path */}
        </li>
        <li>
          <Link to="contact">Contact Us</Link> {/* Relative path */}
        </li>
      </ul>
    </nav>
  );
}

export default WebsiteApp;
