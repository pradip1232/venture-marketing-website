import React from 'react'
import "../assets/css/heroSectionfounder.css";
import Navbar from '../components/Navbar';
import FactoryFloor from '../components/FounderSections/FactoryFloor';
import OperatorsSection from '../components/FounderSections/OperatorsSection';
import StartupMachinery from '../components/FounderSections/StartupMachinery';
import FactorySlots from '../components/FounderSections/FactorySlots';

import smallImage from '.././assets/img/1 (41).webp';

const Founder = () => {
    return (
        <>
            <section
                className="hero-sectionfounder  align-items-center"
            //   style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Navbar />

                <div className="container-fluid">
                    <div className="row align-items-center text-white">
                        {/* Left Small Image */}
                        <div className="col-md-5 mb-4 mb-md-0 text-end" style={{ display: "flex", flexDirection: 'coloumn', justifyContent: 'flex-end' }}>
                            <img
                                src={smallImage}
                                alt="Small Visual"
                                className="img-fluid hero-small-img"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="col-md-7 text-md-start text-center">
                            <h2 className="hero-heading fw-bolddd">
                                You Bring the Raw Idea or Half Built Prototype. <br />
                                <span className="text-highlight">We Run the Factory.</span>
                            </h2>
                            {/* <p className="hero-desc my-3">
                                From blueprint to booming business — we co-build startups like
                                products, with sweat, strategy, and scale baked into every step.
                            </p> */}
                            <button className="btn btn-light btn-outline-dark mt-2">
                                Apply to Build with Us
                            </button>

                            <h6>At Squib, we don’t give you gyaan from a distance</h6>
                            <h5>We get in the trenches with you — from first idea to first revenue, and beyond.</h5>
                        </div>
                    </div>

                    {/* Bottom Line */}
                    {/* <div className="row mt-5">
                        <div className="col text-center">
                            <p className="hero-footer fst-italic">
                                At Squib, We Don’t Give You Gyaan From A Distance
                            </p>
                            <p className="hero-footer-desc">
                                We get in the trenches with you — from first idea to first
                                revenue, and beyond.
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>



            <FactoryFloor />


            <OperatorsSection />
            <StartupMachinery />

            <FactorySlots />

        </>
    )
}

export default Founder
