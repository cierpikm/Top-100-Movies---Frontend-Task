import React from "react";

import { Linkedin, Github, Envelope } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="text-center">
      <nav className="footer-social-links">
        <a href="mailto:cierpikowskimaciej@gmail.com" className="social-link">
          <Envelope />
        </a>
        <a href="https://github.com//cierpikm" className="social-link">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/maciej-cierpikowski/" className="social-link">
          <Linkedin />
        </a>
      </nav>
      <p className="footer-text mb-0">Made by Maciej Cierpikowski</p>
    </footer>
  );
};

export default Footer;
