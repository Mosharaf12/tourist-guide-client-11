import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import HappyClient from '../HappyClient/HappyClient';
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <HappyClient></HappyClient>
            <Trusted></Trusted>
        </div>
    );
};

export default Home;