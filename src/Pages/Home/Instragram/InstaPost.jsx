import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import insta1 from '../../../Assets/img/insta/ista-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
const InstaPost = () => {
    return (
        <>
            <Container>
                
                <div className="insta-image-wrapper">
                    <h3>#AMEY</h3>
                    <Row>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} className='insta-card'>
                            <div className="insta-image-single">
                                <Image src={insta1} />
                                <Link className='insta-icon'><FontAwesomeIcon icon={faVolleyball} />
                                </Link>
                            </div>
                        </Col>
 
                    </Row>
                </div>
            </Container> 
            
        </>
    );
};

export default InstaPost;