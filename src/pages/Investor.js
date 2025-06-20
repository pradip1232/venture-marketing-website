import React from 'react'

import '../assets/css/investor-hero-section.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from '../components/Navbar';
import WhyNotLikeRest from '../components/InvestorSections/WhyNotLikeRest';
import SquibInvestor from '../components/InvestorSections/SquibInvestor';
import BuildBatchSection from '../components/InvestorSections/BuildBatchSection';

import mm from '../assets/img/1 (47).webp';

const Investor = () => {
    return (
        <>
            <div className="investor-hero-section">
                <Navbar />
                <div className="investor-overlay">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={5} className="mb-4 mb-md-0">
                                <img src={mm} alt="Meeting" className="img-fluid rounded shadow meeting-img-investor"  />
                            </Col>
                            <Col md={6} className='hero-text-invetsor-colmn'>
                                <h1 className="text-white fw-boldd">We Manufacture Businesses</h1>
                                <h3 className="text-white fw-semiddbold mb-3">You’d Actually Want to Invest In</h3>
                                <p className="text-white mb-4">
                                   <strong> At Squib </strong> , you don’t scroll through 100 half-baked decks. You get a handful of high-readiness ventures — built with us, vetted by us, and backed by real skin in the game.
                                </p>
                                <Button variant="light" className="rounded-pill px-4 py-2 shadow-sm">
                                    Join the Investor Network
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>


            <WhyNotLikeRest />

            <SquibInvestor />

            <BuildBatchSection />
        </>
    )
}

export default Investor
