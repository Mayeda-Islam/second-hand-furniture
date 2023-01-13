import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div className=' container mx-auto'>
            <Banner></Banner>
            <Advertise></Advertise>
            <Category></Category>
        </div>
    );
};

export default Home;