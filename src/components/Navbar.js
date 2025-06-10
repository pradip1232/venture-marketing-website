import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css"; // Create this CSS file
import logo from '../assets/img/1 (33).webp';

const Navbar = () => {
    return (
        <nav className="custom-navbar navbar navbar-expand-lg text-white ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand logo-text">
                    <img src={logo} alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/founder" className="nav-link">Founder</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/investor" className="nav-link">Investor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/company" className="nav-link">Company</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
