import React from "react";

import { Linkedin, Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="text-center">
      <nav className="footer-social-links">
        <a href="#!" className="social-link">
          <Github />
        </a>
        <a href="#!" className="social-link">
          <Linkedin />
        </a>
      </nav>
      <p className="footer-text mb-0">Made by Maciej Cierpikowski</p>
    </footer>
  );
};

export default Footer;
