import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointments = ({ selectedDate }) => {
    // const [appintmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] =useState(null);
    const [toggleModal, setToggleModal] = useState(false)
    const date = format(selectedDate, 'PP');
    // console.log(treatment);
    const {data:appintmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: ()=>  fetch(`https://medimarto-doctor-portal-server.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('https://medimarto-doctor-portal-server.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <div className='container mx-auto'>
            <p className='text-center mt-0 lg:-mt-40'>Available appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-5 xs:grid-l md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {
                    appintmentOptions.map(option => <AppointmentOptions key={option._id} option={option} setToggleModal={setToggleModal} setTreatment={setTreatment}></AppointmentOptions>)
                }
            </div> 
            {
                treatment &&
                <BookingModal show={toggleModal} close={() => setToggleModal(false)} treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;