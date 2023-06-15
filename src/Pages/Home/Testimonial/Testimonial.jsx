import React, { useState } from "react";
import Headertext from "../../../Component/Headertext/Headertext";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import p1 from "../../../Assets/img/testimonial/person/Ellipse 46.png";
import p2 from "../../../Assets/img/testimonial/person/Ellipse 47.png";
import p3 from "../../../Assets/img/testimonial/person/Ellipse 48.png";
import p4 from "../../../Assets/img/testimonial/person/Ellipse 49.png";
import p5 from "../../../Assets/img/testimonial/person/Ellipse 50.png";
import { key } from "localforage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
const images = [p1, p2, p3, p4, p5];

const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const content = {
    category: "AMEY Testimonials",
    header: "Our Happy Clients",
  };

  return (
    <div className="testimonial-section ptb-100">
      <Container className="testimonial-wrapper" >
        <Headertext content={content}  key={key}/>
        <Row>
          <Col md={6}>
            <div className="circle-image" >
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide className="testimonial-thumb-images" style={{
                  "width": "70px",
                  "margin": "0px",
                }}>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Col>
          <Col md={6}>
            <div className="slider-wrapper">
              <Swiper
                
                loop={true}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <div className="buttons-swiper">
                    <div className="swiper-button-prev">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="swiper-button-next">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                {images.map((image) => {
                  return (
                    <SwiperSlide >
                      <div className="slide-wrapper-single">
                        <div className="swiper-slide-content">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faQuoteLeft}
                          />
                          <h6>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                          </h6>
                          <h4>Amelia Amie</h4>
                          <p>UX/UI Designer</p>
                        </div>
                        <div className="swiper-slide-image">
                          <img src={image} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Testimonial;
