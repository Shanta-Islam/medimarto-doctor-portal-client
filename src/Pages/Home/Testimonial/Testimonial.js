import React from 'react';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: 'https://i.ibb.co/3hPGXKY/default.png',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: 'https://i.ibb.co/3hPGXKY/default.png',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: 'https://i.ibb.co/3hPGXKY/default.png',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='my-16 container mx-auto'>
            <h2 className="text-center mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl">Testimonial</h2>
            <h2 className="text-center mb-4 text-lg tracking-tight leading-none">What Our Patients Says</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;