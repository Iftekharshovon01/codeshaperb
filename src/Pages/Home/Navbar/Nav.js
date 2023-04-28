import React, { useState } from 'react';
import logo from '../../../Assets/img/Logo/logo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faCartShopping, faChevronDown, faHeadset, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    const redirectCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <>
            <Container>
                <Row className='align-items-center justify-content-between py-4'>
                    <Col md={2}>
                        <div className="head-logo">
                            <img className='w-100' src={logo} alt="" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="head-search">
                            <div className="search-container">
                                <input className='search-input'
                                    type="text"
                                    placeholder="Search Here"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button className="search-button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
                            </button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="head-service">
                            <div className="head-service-logo">
                                <a><FontAwesomeIcon icon={faHeadset} style={{ height: "40px", }} /></a>
                            </div>
                            <div className="head-service-content">
                                <p>Hotline</p>
                                <Link onClick={redirectCall} style={{ color: "black", }}>(+990) 123456789</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="head-shopping">
                            <div className="head-shopping-wish">
                                <Link><FontAwesomeIcon icon={faHeart} style={{ height: "25px", color: "black", }} /></Link>
                            </div>
                            <div className="head-shopping-cart">
                                <Link><FontAwesomeIcon icon={faCartShopping} style={{ height: "25px", color: "black", }} /></Link>
                                <div className="shopping-cart-counter">0</div>
                            </div>
                            <div className="head-shopping-menue">
                                <Link><FontAwesomeIcon icon={faBars} style={{ height: "25px", color: "black", }} /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col md={9}>
                        <div className="nav-list">
                            <ul className='nav-pages'>
                                <li className='nav-pages-single'><a>Home<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                    <ul>
                                        <li>test</li>
                                    </ul>
                                </li>
                                <li className='nav-pages-single'><a>Shop<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>

                                    <ul>
                                        <li>test</li>
                                    </ul>
                                </li>
                                <li className='nav-pages-single'><a>Page<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                    <ul>
                                        <li>test</li>
                                    </ul>
                                </li>
                                <li className='nav-pages-single'><a>Blog<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                    <ul>
                                        <li>test</li>
                                    </ul>
                                </li>
                                <li className='nav-pages-single'><a>About</a>
                                </li>
                                <li className='nav-pages-single'><a>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="nav-offer">
                            <a href='#'><FontAwesomeIcon icon={faBagShopping} style={{ color: "#eb0707", padding: "0 15px 0 0", }} />Special Offer</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Nav;
