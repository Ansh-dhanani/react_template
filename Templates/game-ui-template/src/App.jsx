import React from "react";
import "./App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">CyberQuest</h1>
        <div className="nav-buttons">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* Body */}
      <main className="main">
        <h2 className="title">Welcome to CyberQuest</h2>
        <p className="subtitle">
          An epic gaming adventure awaits you! Jump into action, explore worlds,
          and challenge your friends.
        </p>

        <div className="button-grid">
          <button className="btn-primary">Play</button>
          <button className="btn-secondary">Rules</button>
          <button className="btn-secondary">Controls</button>
          <button className="btn-secondary">About</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Follow us on</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaDiscord /></a>
        </div>
        <p className="footer-copy">
          © 2025 CyberQuest. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
