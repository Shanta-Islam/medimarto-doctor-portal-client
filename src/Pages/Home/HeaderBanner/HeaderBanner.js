import {Carousel } from 'flowbite-react';
import React from 'react';
import BannerItem from './BannerItem';

const HeaderBanner = () => {
    return (
        <Carousel>
            <BannerItem image='https://i.ibb.co/YbYrT3J/bg-1.jpg'></BannerItem>
            <BannerItem image='https://i.ibb.co/jZWk0JW/bg-img2.jpg'></BannerItem>
        </Carousel>

    );
};

export default HeaderBanner;