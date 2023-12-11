import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Button, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);
    const url = `https://medimarto-doctor-portal-server.vercel.app/bookings?email=${user?.email}`;
    const {data: bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
            
        }
    })
    if(isLoading){
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }
    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>My Appointments</h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">
                                name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Treatment
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Payment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings && bookings?.map((booking, i)=>  <tr key={booking._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i+1}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {booking.patient}
                        </th>
                        <td class="px-6 py-4">
                            {booking.treatment}
                        </td>
                        <td class="px-6 py-4">
                            {booking.appointmentDate}
                        </td>
                        <td class="px-6 py-4">
                            {booking.slot}
                        </td>
                        <td class="px-6 py-4">
                            {
                                booking.price && !booking.paid && 
                                <Link to={`/dashboard/payment/${booking._id}`}>
                                    <Button className='bg-primary'>Pay</Button>
                                </Link>
                            }
                            {
                                booking.price && booking.paid && 
                                <p className='text-md text-green-500'>Paid</p>
                            }
                        </td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;