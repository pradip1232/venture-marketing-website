import React from "react";
import heroImage from "../assets/img/1 (11).webp";

import "../assets/css/home.css";
import Navbar from "../components/Navbar";
import ProcessSection from "../components/HomeSections/ProcessSection";
import FirstBatch from "../components/HomeSections/FirstBatch";
import StartupAssemblySection from "../components/HomeSections/StartupAssemblySection";
import JoinFactorySection from "../components/HomeSections/JoinFactorySection";

const Home = () => {
    return (
        <>
            <section
                className="combined-hero"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="overlay"></div>

                {/* Navbar inside same background wrapper */}
                <Navbar />

                {/* Hero content */}
                <div className="hero-content text-white text-center d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-4 fw-bold mb-2">Welcome to Squib</h1>
                    <h2 className="h3 mb-4">
                        The Factory of <span className="text-warning">Future Unicorns</span>
                    </h2>
                    <p className="mb-4 px-3">
                        India's next big businesses are being assembled here — <br />
                        One bold idea at a time.
                    </p>
                    <button className="btn btn-warning text-dark fw-semibold px-4 py-2">
                        Explore the Factory
                    </button>
                </div>
            </section>

            {/* 22 */}

            <ProcessSection />
            {/* 33 */}
            <FirstBatch />
            <StartupAssemblySection />


            <JoinFactorySection />
        </>

    );
};

export default Home;
