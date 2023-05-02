import { faBars, faCartShopping, faHeadset, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/img/Logo/logo.png';


const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    const redirectCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <div className='boxshadow'>
            <Container >
                <Row className='align-items-center justify-content-between py-4'>
                    <Col md={2}>
                        <div className="head-logo">
                            <Link to={'/'}><img className='w-100' src={logo} alt="" /></Link>
                        </div>
                    </Col>
                    <Col md={5}>
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
                    <Col md={3}>
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
                    <Col md={2}>
                        <div className="head-shopping">
                            <div className="head-shopping-wish">
                                <Link><FontAwesomeIcon icon={faHeart} className='head-shoping-icon' /></Link>
                            </div>
                            <div className="head-shopping-cart">
                                <Link><FontAwesomeIcon icon={faCartShopping} className='head-shoping-icon' /></Link>
                                <div className="shopping-cart-counter">0</div>
                            </div>
                            <div className="head-shopping-menue">
                                <Link><FontAwesomeIcon icon={faBars} className='head-shoping-icon' /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Searchbar;