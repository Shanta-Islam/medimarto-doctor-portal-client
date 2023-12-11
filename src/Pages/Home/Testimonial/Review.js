import { Card } from 'flowbite-react';
import React from 'react';

const Review = ({review}) => {
    return (
        <Card>
            <img alt="img"
            className="mb-3 rounded-full shadow-lg"
            height="96"
            src={review.img}
            width="96"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    {review.name}
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    {review.review}
                </p>
            </p>
        </Card >
    );
};

export default Review;