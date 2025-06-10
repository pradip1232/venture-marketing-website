import React from 'react'

import "../assets/css/CompanyHeroSection.css";
import Navbar from '../components/Navbar';
import StartupLoop from '../components/CompanySections/StartupLoop';
// import heroImg from "../assets/hero-banner.png"; // Use your actual image path


const Company = () => {
    return (
        <>

            <div className="hero-section-company">
                <Navbar />
                <div className="company-overlay d-flex align-items-center">
                    <div className="container text-white text-center text-md-start">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="display-5 fw-bold">WE’RE HERE TO BUILD WHAT INDIA NEEDS NEXT</h1>
                                <p className="lead mt-4">
                                    Squib isn’t a service provider. We’re builders, partners, and quality controllers for India’s next wave of iconic startups.
                                    Backed by deep operational expertise and strong investor trust, we’re bridging the gap between ambitious ideas and fundable, scalable businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <StartupLoop />

        </>
    )
}

export default Company
