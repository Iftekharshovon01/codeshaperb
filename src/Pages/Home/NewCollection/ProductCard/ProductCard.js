import React from 'react';
import { Link } from 'react-router-dom';
import redCotton from '../../../../Assets/img/newCollection/red-cotton-shirt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowsRotate, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {


    return (
        <>
            {/* <div className='card-product mx-1'>
                <div className='card-img'>
                    <img className='w-100' src={redCotton} alt="" />
                </div>
                <div className='card-text'>
                    <div className='category-icon' >
                        <p className="card-category">Men</p>
                        <p className='card-icon'><FontAwesomeIcon icon={faHeart} /></p>
                    </div>
                    <h3>Red Cotton Shirt</h3>
                    <h3>$30</h3>
                </div>
                <div className="card-product-hover">
                    <div className="hover-icon">
                        <a href='.'><FontAwesomeIcon icon={faEye} /></a>
                        <a href='.'><FontAwesomeIcon icon={faArrowsRotate} /></a>
                    </div>

                    <Link className='button-black-product'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></Link>

                </div>
            </div> */}
            <div className="card-product">
                <div className="card-product-img-area">
                    <img className='w-100' src={redCotton} alt="productImage" />
                    <div className="product-card-img-content">
                        <ul>
                            <li><a href='.'><FontAwesomeIcon icon={faEye} /></a></li>
                            <li><a href='.'><FontAwesomeIcon icon={faArrowsRotate} /></a></li>
                        </ul>

                        <Link className='button-black'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></Link>
                    </div>
                </div>
                <div className="product-card-text-area">
                    <div className="product-card-texrt-area-header">
                        <p>Men</p>
                        <a href='.'><FontAwesomeIcon icon={faHeart} /></a>
                    </div>
                    <h3> <a href='.'>Red Cotton Shirt</a></h3>
                    <h6>$30</h6>
                </div>
            </div>

        </>
    );
};

export default ProductCard;