import React from 'react';
import Headertext from '../../../Component/Headertext/Headertext';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { SwiperSlide ,  Swiper } from 'swiper/react';
import shopping from '../../../Assets/img/blog/shopping.jpg';
import { Link } from 'react-router-dom';

const BlogPost = () => {
    const content = {
    category: "AMEY Recent Articels",
    header: "Our Blog Post",
  };
    return (
        <div className='blog-wrapper'>
            <Headertext content={content}/>
            <div className="blog-slider-wrapper">
                <Container className='container-blog'>
                    <Row>
                        <Col md={4} sm={12} className='mt-3'>
                            <div className="news-letter">
                                <h4 className='header-text'>Subscribe Our Newsletter</h4>
                                <h6 className='discount-text'>To Get 20% Discount</h6>
                                <input className='control-form' type="email" placeholder='Email Address' />
                                <Link className='button-white'>Subscribe</Link>    
                            </div>
                        </Col>
                        <Col md={8} sm={12} className='mt-3'>
                            <Swiper
                            autoplay={ true}
                            spaceBetween={25}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className="custom-card">
                                        <div className="image-container">
                                            <Image src={shopping} alt="Card Image" className="card-image" />
                                        </div>
                                        <div className="card-body">
                                            <h6 className='category-text'>News</h6>
                                            <h4>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                            <Link className='button-white'>Read More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="custom-card">
                                        <div className="image-container">
                                            <Image src={shopping} alt="Card Image" className="card-image" />
                                        </div>
                                        <div className="card-body">
                                            <h6 className='category-text'>News</h6>
                                            <h4>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                            <Link className='button-white'>Read More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="custom-card">
                                        <div className="image-container">
                                            <Image src={shopping} alt="Card Image" className="card-image" />
                                        </div>
                                        <div className="card-body">
                                            <h6 className='category-text'>News</h6>
                                            <h4>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                            <Link className='button-white'>Read More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    );
};

export default BlogPost;