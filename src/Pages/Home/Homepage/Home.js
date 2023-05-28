import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import NewCollection from '../NewCollection/NewCollection';
import Countdown from '../Counter/Countdown';
import Trending from '../Trending/Trending';
import Promotion from '../Promotion/Promotion';
import HotDeal from '../HotDeal/HotDeal';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <NewCollection></NewCollection>
            <Countdown></Countdown>
            <Trending></Trending>
            <Promotion></Promotion>
            <HotDeal></HotDeal>
            <Testimonial/>
        </>
    );
};

export default Home;