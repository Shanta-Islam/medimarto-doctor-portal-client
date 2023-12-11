import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({ image }) => {
    return (
        <div className="relative h-full w-full">
            <img src={image} alt="hero-img" className="h-full w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                    <h4 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white leading-10">
                        We Take Care of <br />Your Health Care
                    </h4>
                    <p className="mb-12 text-lg text-white">
                        Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation. Our priority is to ensure the well being of patients.
                    </p>
                    <Link to="/appointment"><Button className='mx-auto bg-primary'>Make Appointment</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;