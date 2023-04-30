import React from 'react';
import girl from '../../../Assets/img/Banner/pretty-girl.png';
import winter from '../../../Assets/img/Banner/WINTER.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ background: " #ECFEFF", }}>
            <Container >
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className="banner-text">
                                    <h6>AMEY Winter Collction</h6>
                                    <h1>Buy Trendy Girls
                                        Clothing</h1>
                                    <Link>Shop Now</Link>
                                </div>

                            </Col>
                            <Col md={6}><div className="banner-image-area">
                                <img src={girl} alt="" />
                                <h1>WINTER</h1>
                            </div></Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className="banner-text">
                                    <h6>AMEY Winter Collction</h6>
                                    <h1>Buy Trendy Girls
                                        Clothing</h1>
                                    <Link>Shop Now</Link>
                                </div>

                            </Col>
                            <Col md={6}><div className="banner-image-area">
                                <img src={girl} alt="" />
                                <h1>WINTER</h1>
                            </div></Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className="banner-text">
                                    <h6>AMEY Winter Collction</h6>
                                    <h1>Buy Trendy Girls
                                        Clothing</h1>
                                    <Link>Shop Now</Link>
                                </div>

                            </Col>
                            <Col md={6}><div className="banner-image-area">
                                <img src={girl} alt="" />
                                <h1>WINTER</h1>
                            </div></Col>
                        </Row>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div >
    );
};

export default Banner;