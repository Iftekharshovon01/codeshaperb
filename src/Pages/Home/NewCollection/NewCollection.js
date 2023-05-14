import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const NewCollection = () => {
    return (
        <Container>
            <h3 className='new-collection-head'>AMEY New Collections</h3>
            <h1 className='new-collection-header'>New Products</h1>
            <Row className='mt-5 justify-content-center'>
                <Col lg={4} md={5} sm={6} xs={12}><ProductCard></ProductCard></Col>
                <Col lg={4} md={5} sm={6} xs={12}><ProductCard></ProductCard></Col>
                <Col lg={4} md={5} sm={6} xs={12}><ProductCard></ProductCard></Col>
                <Col lg={4} md={5} sm={6} xs={12}><ProductCard></ProductCard></Col>
            </Row>
            <div className='d-flex justify-content-center mt-5'>
                <Link className='button-white'>Show More</Link>
            </div>

        </Container>
    );
};

export default NewCollection;