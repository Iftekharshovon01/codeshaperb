import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown, } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';

const Nav = () => {


    return (
        <>
            <Searchbar></Searchbar>
            <Container>
                <Row className='justify-content-end align-items-center'>
                    <Col md={9}>
                        <div className="nav-list">
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
                                        <li className='nav-page-nested-single'>Shirts</li>
                                        <li className='nav-page-nested-single'>T-Shirts</li>
                                        <li className='nav-page-nested-single'>Trowsers</li>
                                    </ul>
                                </li>
                                <li className='nav-pages-single'><a>Blog<FontAwesomeIcon icon={faChevronDown} style={{ padding: "0 0 0 10px", }} /></a>
                                    <ul className='nav-page-nested'>
                                        <li className='nav-page-nested-single'>Shirts</li>
                                        <li className='nav-page-nested-single'>T-Shirts</li>
                                        <li className='nav-page-nested-single'>Trowsers</li>
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
