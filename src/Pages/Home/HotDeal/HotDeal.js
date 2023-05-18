import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import img1 from '../../../Assets/img/hotDeal/pngwing 1.png';
import img2 from '../../../Assets/img/hotDeal/pngwing 2.png';
import img3 from '../../../Assets/img/hotDeal/pngwing 3.png';

// import required modules
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Thumbs } from "swiper";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../../Component/ProductCard/ProductCard";

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(0);

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
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                        }}
                                        spaceBetween={10}
                                        navigation={false}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <Image src={img1} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={img2} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={img3} />
                                        </SwiperSlide>

                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <Image src={img1} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={img2} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image src={img3} />
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>
                                <Col md={6}>
                                    <ProductCard></ProductCard>
                                </Col>

                            </Row>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                        }}
                                        spaceBetween={10}
                                        navigation={false}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <img src={img1} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img2} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img3} />
                                        </SwiperSlide>

                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img src={img1} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img2} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img3} />
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>
                                <Col md={6}>
                                    <ProductCard></ProductCard>
                                </Col>

                            </Row>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>

        </>
    );
}
