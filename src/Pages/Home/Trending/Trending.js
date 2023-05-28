import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import ProductCard from '../../../Component/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Headertext from '../../../Component/Headertext/Headertext';



const Trending = () => {
    return (
        <>
            <div className='trending-wrapper'>
                <Container >
                    <Headertext />
                    <div className="trending-slider-wrapper">
                        <Container className='container-trend'>
                            <div className="swiper-trend-prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className="swiper-trend-next">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <Swiper
                                cssMode={true}
                                navigation={

                                    {
                                        nextEl: ".swiper-trend-next",
                                        prevEl: ".swiper-trend-prev",
                                        disabledClass: "swiper-trend-disabled"
                                    }


                                }
                                pagination={false}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="mySwiper"
                            >

                                <SwiperSlide >
                                    <Row className='align-items-center'>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <Row className='align-items-center'>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <Row className='align-items-center'>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                        <Col md={3}>
                                            <ProductCard></ProductCard>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </div>
                </Container>


            </div>
        </>
    );
};

export default Trending;