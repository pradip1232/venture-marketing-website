import React from 'react'
import Navbar from '../components/Navbar'
import '../components/assets/css/Community.css';
import communityBg from "../assets/img/1 (10).webp";
import FoundersExpertsSection from '../components/CommunitySections/FoundersExpertsSection';
import EcosystemSection from '../components/CommunitySections/EcosystemSection';

const Community = () => {
    return (
        <>
            <section
                className="community-section "
                style={{
                    backgroundImage: `url(${communityBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh", // or a fixed height like 500px
                }}
            >
                <Navbar />
                <div className="container text-center py-5">
                    <h3 className="fw-bold mb-3">WHERE BUILDERS, BACKERS & BELIEVERS BELONG</h3>
                    <p className="mb-4 mx-auto community-desc">
                        At Squib, community isn’t a buzzword — it’s our backbone. <br />
                        We’re cultivating a powerful network of founders, investors, mentors, and operators — all plugged into one shared mission:
                        building iconic businesses and shaping the next wave of India’s startup ecosystem.
                    </p>
                    <button className="btn btn-light fw-semibold px-4 py-2 shadow-sm">Partner with Us</button>
                </div>
            </section>



            <FoundersExpertsSection />

            <EcosystemSection />
        </>
    )
}

export default Community
