import { faComments, faHeadset, faRotateLeft, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='service'>
            <Container>
                <ul className='d-flex justify-content-between'>
                    <li >
                        <div className='service-single'>
                            <FontAwesomeIcon className='service-icon' icon={faTruck} />
                            <div className='service-text'>
                                <h1>Fast Free Delivery</h1>
                                <p>Free delivery for all orders
                                    over $120</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='service-single'>
                            <FontAwesomeIcon className='service-icon' icon={faHeadset} />
                            <div className='service-text'>
                                <h1>24/7 Support</h1>
                                <p>Our friendly 24/7 customer
                                    support.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='service-single'>

                            <FontAwesomeIcon className='service-icon' icon={faRotateLeft} />
                            <div className='service-text'>
                                <h1>Retrun Policy</h1>
                                <p>We retrun money within just
                                    30 days</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='service-single'>
                            <FontAwesomeIcon className='service-icon' icon={faComments} />

                            <div className='service-text'>
                                <h1>Positive Feedback</h1>
                                <p>90% clients feedback is positive & happy</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Service;