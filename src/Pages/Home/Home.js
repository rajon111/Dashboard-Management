import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import OurServices from './OurServices';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Testimonials/>
            <OurServices></OurServices>
            <BusinessSummery/>
            <Footer></Footer>
        </div>
    );
};

export default Home;