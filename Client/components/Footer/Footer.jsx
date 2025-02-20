import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Career Compass</h3>
          <p>Your trusted partner in career guidance and professional development.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/career-assessment">Career Assessment</a></li>
            <li><a href="/job-matches">Job Matches</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@careercompass.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Career Street</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><FaLinkedin className="social-icon" /></a>
            <a href="#"><FaTwitter className="social-icon" /></a>
            <a href="#"><FaFacebook className="social-icon" /></a>
            <a href="#"><FaInstagram className="social-icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Career Compass. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
