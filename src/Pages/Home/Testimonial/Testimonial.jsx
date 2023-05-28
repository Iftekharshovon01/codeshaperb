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
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const images = [p1, p2, p3, p4, p5];

const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const content = {
    category: "AMEY Testimonials",
    header: "Our Happy Clients",
  };

  return (
    <div className="testimonial-section ptb-100">
      <Container className="testimonial-wrapper" key={key}>
        <Headertext content={content} />
        <Row>
          <Col md={6}>
            <div className="circle-image ">
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
                    <SwiperSlide className="testimonial-thumb-images">
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
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                // thumbs={{
                //   swiper: thumbsSwiper,
                // }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide>
                      <div className="slide-wrapper-single">
                        <div className="swiper-slide-content">
                          {/* <svg
                            width="97"
                            height="97"
                            viewBox="0 0 97 97"
                            fill="none"
                            // xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <rect
                              opacity="0.2"
                              x="97"
                              y="97"
                              width="97"
                              height="97"
                              transform="rotate(180 97 97)"
                              fill="url(#pattern0)"
                            />
                            <defs>
                              <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  // xlink:href="#image0_0_584"
                                  transform="scale(0.00195312)"
                                />
                              </pattern>
                              <image
                                id="image0_0_584"
                                width="512"
                                height="512"
                              />
                            </defs>
                          </svg> */}

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
