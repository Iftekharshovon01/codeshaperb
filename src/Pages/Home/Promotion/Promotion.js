import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Promotion = () => {
    return (
        <div className='promo-banner'>
            <Container>

                <div className="text-wrapper">
                    <button className='play-btn'>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    
                    <h3>50%<sub>OFF</sub></h3>
                    <h2>For Couple Collection</h2>
                    <div className="button-white">
                        Shop Now
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Promotion;