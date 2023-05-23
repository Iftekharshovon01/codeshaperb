import { faHeadset, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/img/Logo/logo.png';
import Sidebar from './Sidebar';


const Searchbar = () => {


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    const redirectCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <div className='search-wrapper '>
            <Container >
                <Row className='align-items-center justify-content-between py-4'>
                    <Col md={2} sm={6} xs={6} >
                        <div className="head-logo">
                            <Link to={'/'}><img className='w-100' src={logo} alt="" /></Link>
                        </div>
                    </Col>
                    <Col md={5} lg={5} className='d-md-block d-xs-none d-sm-none d-none'>
                        <div className="head-search">
                            <div className="search-container">
                                <input className='search-input'
                                    type="text"
                                    placeholder="Search Here..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button className="search-button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Col>
                    <Col md={3} lg={3} className='d-md-block d-xs-none d-sm-none d-none'>
                        <div className="head-service">
                            <div className="head-service-logo">
                                <a href='.'><FontAwesomeIcon icon={faHeadset} className='head-service-logo-icon' /></a>
                            </div>
                            <div className="head-service-content">
                                <p>Hotline</p>
                                <Link onClick={redirectCall} className='head-service-logo-icon'>(+990) 123456789</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={6} xs={6} >
                        <div className="head-shopping">
                            <div className="head-shopping-wish">
                                <Link><svg className='head-shoping-icon' width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.47706 3.477C2.85025 4.10379 2.35305 4.84791 2.01382 5.66687C1.6746 6.48582 1.5 7.36357 1.5 8.25C1.5 9.13643 1.6746 10.0142 2.01382 10.8331C2.35305 11.6521 2.85025 12.3962 3.47706 13.023L15.0001 24.546L26.5231 13.023C27.7889 11.7571 28.5001 10.0402 28.5001 8.25C28.5001 6.45978 27.7889 4.74288 26.5231 3.477C25.2572 2.21112 23.5403 1.49996 21.7501 1.49996C19.9598 1.49996 18.2429 2.21112 16.9771 3.477L15.0001 5.454L13.0231 3.477C12.3963 2.85019 11.6521 2.35298 10.8332 2.01376C10.0142 1.67454 9.13649 1.49994 8.25006 1.49994C7.36363 1.49994 6.48588 1.67454 5.66693 2.01376C4.84797 2.35298 4.10385 2.85019 3.47706 3.477V3.477Z" stroke="#71717A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></Link>


                            </div>
                            <div className="head-shopping-cart">
                                <Link><svg className='head-shoping-icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.5H4.5L5.1 4.5L1.5 1.5ZM7.5 16.5H22.5L28.5 4.5H5.1L7.5 16.5ZM7.5 16.5L5.1 4.5L7.5 16.5ZM7.5 16.5L4.0605 19.9395C3.1155 20.8845 3.7845 22.5 5.121 22.5H22.5L7.5 16.5ZM22.5 22.5C21.7044 22.5 20.9413 22.8161 20.3787 23.3787C19.8161 23.9413 19.5 24.7044 19.5 25.5C19.5 26.2956 19.8161 27.0587 20.3787 27.6213C20.9413 28.1839 21.7044 28.5 22.5 28.5C23.2956 28.5 24.0587 28.1839 24.6213 27.6213C25.1839 27.0587 25.5 26.2956 25.5 25.5C25.5 24.7044 25.1839 23.9413 24.6213 23.3787C24.0587 22.8161 23.2956 22.5 22.5 22.5ZM10.5 25.5C10.5 26.2956 10.1839 27.0587 9.62132 27.6213C9.05871 28.1839 8.29565 28.5 7.5 28.5C6.70435 28.5 5.94129 28.1839 5.37868 27.6213C4.81607 27.0587 4.5 26.2956 4.5 25.5C4.5 24.7044 4.81607 23.9413 5.37868 23.3787C5.94129 22.8161 6.70435 22.5 7.5 22.5C8.29565 22.5 9.05871 22.8161 9.62132 23.3787C10.1839 23.9413 10.5 24.7044 10.5 25.5V25.5Z" stroke="#71717A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </Link>
                                <div className="shopping-cart-counter">0</div>
                            </div>
                            <Sidebar className=' d-md-none'></Sidebar>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Searchbar;