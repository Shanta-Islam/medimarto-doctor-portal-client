import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
            <div className='container-fuild'>
                <HeaderBanner></HeaderBanner>
            </div>
            <div>
                <About></About>
                <Services></Services>
                <Testimonial></Testimonial>
                <MakeAppointment></MakeAppointment>
            </div>
        </div>

    );
};

export default Home;