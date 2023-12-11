import React from 'react';
import { DayPicker } from 'react-day-picker';

const AppintmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <section className="mt-10">
            <div className="grid max-w-screen-lg mx-auto py-2 lg:gap-8 xl:gap-0 lg:py-8 md:grid-cols-12">
                <div className="mr-auto place-self-center md:col-span-7 mx-auto">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                
                <div className="hidden md:mt-0 md:col-span-5 md:flex">
                    <img src="https://i.ibb.co/9qKvQ5d/pexels-antoni-shkraba-5215024.jpg" className='h-3/4' alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default AppintmentBanner;