import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import NewCollection from '../NewCollection/NewCollection';
import Countdown from '../Counter/Countdown';
import { Col, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <NewCollection></NewCollection>
            <Countdown></Countdown>
            <div className="test ">
                <Row xs={2} md={4}>
                    <Col className='border'>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </div>
        </>
    );
};

export default Home;