import React from 'react';
import Headertext from '../../../Component/Headertext/Headertext';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { SwiperSlide ,  Swiper } from 'swiper/react';
import ProductCard from '../../../Component/ProductCard/ProductCard';

import shopping from '../../../Assets/img/blog/shopping.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
                        <Col md={4}><ProductCard/></Col>
                        <Col md={8}>
                            <Swiper
                            spaceBetween={25}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                  <Card className="custom-card">
                                    <div className="image-container">
                                        <img src={shopping} alt="Card Image" className="card-image"/>
                                    </div>
                                    <Card.Body>
                                            <h6 className='category-text'>News</h6>
                                            <h4 className='border-bottom'>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                       <Link className='button-white'>Read More</Link>
                                    </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <Card className="custom-card">
                                    <div className="image-container">
                                        <img src={shopping} alt="Card Image" className="card-image"/>
                                    </div>
                                    <Card.Body>
                                            <h6 className='category-text'>News</h6>
                                            <h4 className='border-bottom'>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                       <Link className='button-white'>Read More</Link>
                                    </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <Card className="custom-card">
                                    <div className="image-container">
                                        <img src={shopping} alt="Card Image" className="card-image"/>
                                    </div>
                                    <Card.Body>
                                            <h6 className='category-text'>News</h6>
                                            <h4 className='border-bottom'>A happy shopping makes a happy life</h4>
                                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis llamco est sit aliqua dolor do amet.</p>
                                       <Link className='button-white'>Read More</Link>
                                    </Card.Body>
                                    </Card>
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