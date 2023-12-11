import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32' >
            <div class="flex">
                <div
                    class="w-full h-auto bg-[url('https://i.ibb.co/rknzG8b/pexels-anna-shvets-3845810.jpg')] bg-cover bg-top">
                    <div class="w-full h-full backdrop-brightness-50 bg-gray-900/30 mx-auto text-center p-40 text-white">
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="w-3/4 mx-auto mt-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to="/appointment"><Button className='bg-primary mx-auto mt-5'>Appointment</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;