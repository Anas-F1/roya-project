import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h3>تواصل معنا</h3>
        <div className="contact-row">
          <Mail size={20} />
          <a href="mailto:contact@roya-consultancy.com" className="email-link">
            contact@roya-consultancy.com{" "}
          </a>
        </div>
        <div className="contact-row">
          <Phone size={20} />
          <a href="tel:+966500000000">00966555555555</a>
        </div>
        <p className="copyright-text">
          Roya Consultancy &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
