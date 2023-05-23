import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import counter from '../../../Assets/img/counter/women-with-bags.png';
import Counter from '../../../Component/Countdown/Counter';

const Countdown = () => {



    return (
        <div className='counter'>
            <Container>
                <div className="counter-wrapper">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='counter-text-wrapper'>
                                <div className="counter-header-text">
                                    <h3>WINTER DEAL 20% OFF</h3>
                                    <h1>Best Deal For You</h1>
                                </div>
                                <Counter></Counter>
                                <div className='d-flex justify-content-center mt-2'>
                                    <Link className='button-white'>Explore Now</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="counter-img">
                                <div className="counter-img-shop">
                                    <img src={counter} alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <p><span className='background-text-counter-winter'>WINTER</span><span className='background-text-counter-sale'>SALE</span></p>
        </div>
    );
};

export default Countdown;