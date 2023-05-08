import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import counter from '../../../Assets/img/counter/women-with-bags.png';

const Countdown = () => {
    const targetDate = new Date('2023-12-31T23:59:59');

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [calculateTimeLeft, timeLeft]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function calculateTimeLeft() {
        console.log("tgt");
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }


    return (
        <div className='counter'>
            <Container>
                <div className="counter-wrapper">
                    <Row>
                        <Col md={6}>
                            <div className="counter-header-text">
                                <h3>WINTER DEAL 20% OFF</h3>
                                <h1>Best Deal For You</h1>
                            </div>
                            <div className="counter-time">
                                <p className='counter-time-single'><span className='number'>{timeLeft.days}</span><span className='text'>Days</span></p>
                                <p className='counter-time-single'><span className='number'>{timeLeft.hours}</span><span className='text'>Hours</span></p>
                                <p className='counter-time-single'><span className='number'>{timeLeft.minutes}</span><span className='text'>Mins</span></p>
                                <p className='counter-time-single'><span className='number'>{timeLeft.seconds}</span><span className='text'>Secs</span></p>
                            </div>
                            <div className='d-flex justify-content-center mt-2'>
                                <Link className='button-white'>Explore Now</Link>
                            </div>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </div>

            </Container>
            <div className="counter-img">
                <div className="counter-img-shop">
                    <img src={counter} alt="" />
                </div>
            </div>
            <p><span className='background-text-counter-winter'>WINTER</span><span className='background-text-counter-sale'>SALE</span></p>
        </div>
    );
};

export default Countdown;