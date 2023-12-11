import { Button, Card } from 'flowbite-react';
import React from 'react';

const Service = ({service}) => {
    
    return (
        <Card className='hover:bg-primary hover:text-white text-black'>
            <div className="flex flex-col items-center pb-10">
                <p>{service.icon}</p>
                <h5 className="mb-5 text-xl font-medium">
                    {service.name}
                </h5>
                <span className="text-sm">
                    {service.description.slice(0, 100)}...
                </span>
                <Button className='border-primary text-black mt-5'>Read More</Button>
            </div>
        </Card>
    );
};

export default Service;