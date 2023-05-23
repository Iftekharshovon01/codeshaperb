import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import FeatureProductdetails from "../../../Component/FeatureProductdetails/FeatureProductdetails";
import MyCarousel from "../../../Component/ImageCarosoul/MyCarousel";

// const sliders = [
//     {
//         id: "01",
//         productDetails: [],
//         img: [],
//     },
//     {
//         id: "02",
//         productDetails: [],
//         img: [],
//     },

// ];

export default function HotDeal() {

    return (
        <>
            <div className="hotdeal-wrapper">
                <Container className='container-hotdeal'>
                    <div className="swiper-hotdeal-prev">
                        <FontAwesomeIcon icon={faChevronLeft} />

                    </div>
                    <div className="swiper-hotdeal-next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <Swiper
                        cssMode={true}
                        navigation={
                            {
                                nextEl: ".swiper-hotdeal-next",
                                prevEl: ".swiper-hotdeal-prev",
                                disabledClass: "swiper-hotdeal-disabled"
                            }


                        }
                        pagination={false}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper w-100"
                    >
                        {/* {sliders.map((slider) => {
                            return <SwiperSlide key={slider.id} >
                                <Row className='align-items-center'>
                                    <Col md={6}>
                                        <MyCarousel />
                                    </Col>
                                    <Col md={6}>
                                        <FeatureProductdetails></FeatureProductdetails>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        })} */}
                        <SwiperSlide >
                            <Row className='align-items-center'>
                                <Col md={6} className="p-0">
                                    <div className="carsoul-wrapper">
                                        <MyCarousel />
                                    </div>
                                </Col>
                                <Col md={6} className="p-0">
                                    <FeatureProductdetails />
                                </Col>
                            </Row>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>

        </>
    );
}
