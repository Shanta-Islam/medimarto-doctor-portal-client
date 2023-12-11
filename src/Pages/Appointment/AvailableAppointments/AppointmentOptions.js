import { Button, Card } from 'flowbite-react';
import React from 'react';

const AppointmentOptions = ({ option, setToggleModal, setTreatment }) => {
    const { name, price, slots } = option;
    const openModal = () =>{
        setToggleModal(true)
        setTreatment(option)
    }
    return (
        <Card className='text-black'>
            <div className="flex flex-col items-center pb-10">
                <h5 className="mb-5 text-xl font-medium">
                    {name}
                </h5>
                <span className="text-sm">
                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </span>
                <span className="text-sm">
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                </span>
                <span className='text-sm'>
                    Price: ${price}
                </span>
                <Button onClick={()=>openModal()} className='border-primary hover:bg-primary hover:text-white text-black mt-5' disabled={slots.length === 0}>Book Appointment</Button>
            </div>
        </Card>
    );
};

export default AppointmentOptions;