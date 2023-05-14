import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import NewCollection from '../NewCollection/NewCollection';
import Countdown from '../Counter/Countdown';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <NewCollection></NewCollection>
            <Countdown></Countdown>
        </>
    );
};

export default Home;