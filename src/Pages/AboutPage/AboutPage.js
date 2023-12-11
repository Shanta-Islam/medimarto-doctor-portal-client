import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='container mx-auto my-20 md:my-10 sm:my-5'>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="lg:mt-0 lg:col-span-7 lg:flex relative visible">
                    <img src="https://i.ibb.co/QcbGkMg/about-img.jpg" alt="about img" className="w-96 rounded-lg shadow-xl mx-auto" />
                    <img src="https://i.ibb.co/9w9tBtn/New-Project.png" alt="" className='w-52 h-48 absolute left-9 rounded-lg top-60 hidden md:block -z-10' />
                </div>
                <div className="place-self-center lg:col-span-5 my-16 lg:m-0">
                    <h2 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl dark:text-white">About Us</h2>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">It is issued free of charge in medical offices or at home with time purchase of services in the amount of more than $40 per person. ices in an elevated ambience, completed by 
                    our administration and support staff all have exceptional
                    Fractures and dislocations
                    Connecting with the world to improve health globally</p>
                    <Link to="/about"><Button className='bg-primary'>Get More Info</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;