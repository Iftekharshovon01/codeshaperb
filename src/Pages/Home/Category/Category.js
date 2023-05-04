import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import men from '../../../Assets/img/hot-list/features1.png';
import couple from '../../../Assets/img/hot-list/couple.png';
import women from '../../../Assets/img/hot-list/women.png';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <>
            <div className="category">
                <Container>
                    <Row >
                        <Col md={6}>
                            <div className="men">
                                <div className="image-wrapper-men">
                                    <img src={men} alt="" />
                                </div>
                                <div className="text-wrapper-men">
                                    <h4 className='hot-text-men'>
                                        HOT LIST
                                    </h4>
                                    <h1 className='collection-men'>Men Collection</h1>
                                    <Link to={'/'} className='button-white'>Explore Now</Link>
                                </div>

                                <div className="background-text-men">
                                    MEN
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="others">
                                <div className="couple">
                                    <div className="image-wrapper-couple">
                                        <img src={couple} alt="" />
                                    </div>
                                    <div className="text-wrapper-couple">
                                        <h4 className='hot-text-couple'>
                                            HOT LIST
                                        </h4>
                                        <h1 className='collection-couple'><span>Couple</span><br></br><span>Collection</span></h1>
                                        <Link to={'/'} className='button-white'>Explore Now</Link>
                                    </div>

                                    <div className="background-text-couple">
                                        COUPAL
                                    </div>
                                </div>
                                <div className="women">
                                    <div className="image-wrapper-women">
                                        <img src={women} alt="" />
                                    </div>
                                    <div className="text-wrapper-women">
                                        <h4 className='hot-text-women'>
                                            HOT LIST
                                        </h4>
                                        <h1 className='collection-women'>Women Collection</h1>
                                        <Link to={'/'} className='button-white'>Explore Now</Link>
                                    </div>

                                    <div className="background-text-women">
                                        WOMEN
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Category;