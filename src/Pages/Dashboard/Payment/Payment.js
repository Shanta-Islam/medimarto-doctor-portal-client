import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    // if(navigation.state === 'loading'){
    //     return <div>
    //     <Spinner aria-label="Center-aligned spinner example" />
    // </div>
    //}
    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>Payment for ${booking.treatment}</h3>
            <p className='text-xl'>Please Pay <strong>${booking.price}</strong> for your appointment on {booking.appointmentDate} at {booking.slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}></CheckoutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;