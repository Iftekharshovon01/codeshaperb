import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown, } from '@fortawesome/free-solid-svg-icons';

const Menue = () => {

    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= ref.current.offsetTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // console.log(window.removeEventListener('scroll', handleScroll));
        };
    }, []);

    console.log(isSticky);


    return (
        <div className={isSticky ? 'sticky-top' : ''} ref={ref}>
            <Container>
                <Row className='justify-content-end align-items-center'>
                    <Col md={9}>
                        <ul className='nav-pages'>
                            <li className='nav-pages-single'><a>Home<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                <ul className='nav-page-nested'>
                                    <li className='nav-page-nested-single'>Shirts</li>
                                    <li className='nav-page-nested-single'>T-Shirts</li>
                                    <li className='nav-page-nested-single'>Trowsers</li>
                                </ul>
                            </li>
                            <li className='nav-pages-single'><a>Shop<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                <ul className='nav-page-nested'>
                                    <li className='nav-page-nested-single'>Shirts</li>
                                    <li className='nav-page-nested-single'>T-Shirts</li>
                                    <li className='nav-page-nested-single'>Trowsers</li>
                                </ul>
                            </li>
                            <li className='nav-pages-single'><a>Pages<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                <ul className='nav-page-nested'>
                                    <li className='nav-page-nested-single'>Constraction</li>
                                    <li className='nav-page-nested-single'>Affiliation</li>
                                </ul>
                            </li>
                            <li className='nav-pages-single'><a>Blog<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                <ul className='nav-page-nested'>
                                    <li className='nav-page-nested-single'>Tour</li>
                                    <li className='nav-page-nested-single'>MOU</li>
                                    <li className='nav-page-nested-single'>Clients</li>
                                </ul>
                            </li>
                            <li className='nav-pages-single'><a>About</a>

                            </li>
                            <li className='nav-pages-single'><a>Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <div className="nav-offer">
                            <a href='#'><FontAwesomeIcon icon={faBagShopping} style={{ color: "#eb0707", padding: "0 15px 0 0", }} />Special Offer</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Menue;