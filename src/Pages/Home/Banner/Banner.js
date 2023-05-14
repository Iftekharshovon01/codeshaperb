import React from 'react';
import girl from '../../../Assets/img/Banner/pretty-girl.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <Container className='banner-wrapper'>
                <div className="swiper-button-prev">
                    <FontAwesomeIcon icon={faArrowLeftLong} />

                </div>
                <div className="swiper-button-next">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
                <Swiper
                    cssMode={true}
                    navigation={

                        {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }


                    }
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
                                    <h1>Buy Trendy Girls Clothing</h1>
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
                            <Col md={6} className='d-{md,sm,xs,lg}-block d-none'><div className="banner-image-area">
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