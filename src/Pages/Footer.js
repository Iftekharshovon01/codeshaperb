import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../src/Assets/img/Logo/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import visa from '../../src/Assets/img/payment/visa.png';
import paypal from '../../src/Assets/img/payment/paypal.png';
import mastero from '../../src/Assets/img/payment/masterp.png';
import discover from '../../src/Assets/img/payment/discover.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-wrapper">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="head-logo">
                                <Link to={'/'}><img className='w-50' src={logo} alt="" /></Link>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <ul className='social'>
                                <li><svg width="18" height="14" viewBox="0 0 10 16" fill='#18181b' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.833336 6.33333V9.66667H3.33334V15.5H6.66667V9.66667H9.16667L10 6.33333H6.66667V4.66667C6.66667 4.44565 6.75447 4.23369 6.91075 4.07741C7.06703 3.92113 7.27899 3.83333 7.5 3.83333H10V0.5H7.5C6.39493 0.5 5.33513 0.938987 4.55372 1.72039C3.77232 2.50179 3.33334 3.5616 3.33334 4.66667V6.33333H0.833336Z" />
                                </svg>
                                </li>
                                <li><svg width="18" height="14" viewBox="0 0 18 14" fill='#18181b' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3333 0.34119C16.5 0.749523 15.6833 0.915356 14.8333 1.16619C13.8992 0.112023 12.5142 0.0536895 11.1833 0.552023C9.85249 1.05036 8.98082 2.26869 8.99999 3.66619V4.49952C6.29582 4.56869 3.88749 3.33702 2.33332 1.16619C2.33332 1.16619 -1.15168 7.36036 5.66666 10.3329C4.10666 11.372 2.55082 12.0729 0.666656 11.9995C3.42332 13.502 6.42749 14.0187 9.02832 13.2637C12.0117 12.397 14.4633 10.1612 15.4042 6.81202C15.6848 5.79342 15.8242 4.74107 15.8183 3.68452C15.8167 3.47702 17.0767 1.37452 17.3333 0.340356V0.34119Z" />
                                </svg>
                                </li>
                                <li><svg width="20" height="18" viewBox="0 0 20 18" fill='#18181b' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.821152 5.85076H4.86586V17.9955H0.821152V5.85076ZM2.86821 0.00488281C1.49527 0.00488281 0.588211 0.911941 0.588211 2.10135C0.588211 3.26488 1.4588 4.19665 2.8188 4.19665H2.8435C4.25292 4.19665 5.13527 3.26488 5.1235 2.10135C5.11056 0.911941 4.25292 0.00488281 2.86821 0.00488281ZM14.767 5.56841C12.6153 5.56841 11.6576 6.74723 11.127 7.579V5.85076H7.09527C7.09527 5.85076 7.14468 6.99076 7.09527 17.9955H11.127V11.2178C11.127 10.8508 11.1647 10.4943 11.2612 10.2261C11.5564 9.50253 12.2164 8.75547 13.3341 8.75547C14.7906 8.75547 15.3788 9.87076 15.3788 11.5002V17.9955H19.4117V11.0343C19.4117 7.30841 17.4259 5.56841 14.767 5.56841Z" />
                                </svg>
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill='#18181b' xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_677)">
                                            <path d="M14.1667 4.16699H5.83333C3.99238 4.16699 2.5 5.65938 2.5 7.50033V12.5003C2.5 14.3413 3.99238 15.8337 5.83333 15.8337H14.1667C16.0076 15.8337 17.5 14.3413 17.5 12.5003V7.50033C17.5 5.65938 16.0076 4.16699 14.1667 4.16699Z" fill="#18181B" />
                                            <path d="M8.33334 7.50098L12.5 10.001L8.33334 12.501V7.50098Z" fill="#FAFAFA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_677">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </li>
                            </ul>
                        </Col>
                        <Col md={8} >
                            <Row >
                                <Col md={4}>
                                    <div className="menue-item-single">
                                        <p>Information</p>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Shop</li>
                                            <li>Offers</li>
                                            <li>Privacy Policy</li>
                                            <li>Trems & Condition</li>
                                        </ul>
                                    </div>

                                </Col>
                                <Col md={4}>
                                    <div className="menue-item-single">
                                        <p>My Account</p>
                                        <ul>
                                            <li>My Profile</li>
                                            <li>Cart</li>
                                            <li>Wishlist</li>
                                            <li>Checkout</li>
                                            <li>Order Tracking</li>
                                        </ul>
                                    </div>

                                </Col>
                                <Col md={4}>
                                    <div className="menue-item-single">
                                        <p>Contact Us</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faLocationDot} className='icon-menue' />XYZ Road #24, Blog a part New York</li>
                                            <li><FontAwesomeIcon className='icon-menue' icon={faPhone} />001122121212121
                                                <br />
                                                45454545454545</li>
                                            <li><FontAwesomeIcon className='icon-menue' icon={faEnvelope} />amey.us@gmail.com <br /> contact.amey@info.com</li>
                                        </ul>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
                <div className="payment">
                    <p>We Accept:</p>
                    <ul>
                        <li><Image src={visa} /></li>
                        <li><Image src={paypal} /></li>
                        <li><Image src={mastero} /></li>
                        <li><Image src={discover} /></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right-wrapper">
                <Container>
                    <div className="copy-right">
                        <p>Copyright © 2022  AMEY All Rights Reserved.</p>
                        <p>Design & developed by Codeshaper</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;