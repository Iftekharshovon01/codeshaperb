import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import men from '../../../Assets/img/hot-list/features1.png';
import { Link } from 'react-router-dom';

const Hotlist = () => {
    return (
        <>
            <div className="hotlist">
                <Container>
                    <Row >
                        <Col md={6}>
                            <div className="men">
                                <div className="image-wrapper">
                                    <img src={men} alt="" />
                                </div>
                                <div className="text-wrapper">
                                    <h4 className='hot-text'>
                                        Hot List
                                    </h4>
                                    <h1 className='men-c'>Men Collection</h1>
                                    <Link to={'/'} className='button-white'>Explore Now</Link>
                                </div>

                                <div className="background-text">
                                    MEN
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="other">
                                <div className="couple"></div>
                                <div className="women"></div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Hotlist;