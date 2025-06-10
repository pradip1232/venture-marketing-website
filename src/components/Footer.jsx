import React from "react";
import "../assets/css/footer.css";

import logo from "../assets/img/1 (15).webp";

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Left Logo and Text */}
          <div className="col-md-4">
            <img src={logo} alt="Squib Logo" className="footer-logo mb-3" />
            <p>
              We're not just advisors. We're builders. Squib is India’s startup
              assembly line — co-building high-readiness, revenue-ready ventures
              from scratch. Zero fluff. Full skin in the game.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">QUICK LINKS</h6>
            <ul className="list-unstyled footer-links">
              <li>Home</li>
              <li>Founders</li>
              <li>Investors</li>
              <li>Community</li>
              <li>Company</li>
              <li>Apply to the Factory</li>
              <li>Join as Investor</li>
              <li>Join the Community</li>
              <li>Talk to the Team</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">CONTACT US</h6>
            <ul className="list-unstyled footer-links">
              <li>Address</li>
              <li>Phone Number</li>
              <li>Mail</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h6 className="footer-heading">STAY PLUGGED IN</h6>
            <p>
              Join our inner circle for early drops, insider events, and startup
              wisdom.
            </p>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <button className="btn btn-warning">Stay in the Loop</button>
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom text-center mt-4 pt-3 border-top">
          <p className="mb-1">
            Made with love in India, powered by <a href="#">Squibfactory</a>
          </p>
          <p className="small">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>{" "}
            | <a href="#">Code of Conduct</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
