import React, { useContext } from 'react';
import { Button, Modal, Select, TextInput } from 'flowbite-react';
import { format } from 'date-fns';
import {AuthContext} from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ show, close, treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking ={
            appointmentDate : date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);

        fetch('https://medimarto-doctor-portal-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                setTreatment(false);
                toast.success('Booking Confirmed');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
        
    }
    return (
        <>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={close}
            >
                <Modal.Header className='border-2 border-b-0 rounded-t-lg'>{treatmentName}</Modal.Header>
                <Modal.Body className='border-2 border-t-0 rounded-b-lg'>
                    <form onSubmit={handleBooking}>
                        <div className="space-y-6 px-0 pb-4 sm:pb-6 lg:px-5 xl:pb-8">
                            <div>
                                <TextInput id="date"
                                    name='date'
                                    value={date}
                                    color="gray"
                                    disabled
                                />
                            </div>
                            <div>
                                <Select
                                    id="time"
                                    name="slot"
                                    required>
                                    {
                                        slots.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
                                    }
                                </Select>
                            </div>
                            <div>
                                <TextInput id="name"
                                    name='name'
                                    placeholder='Your Name'
                                    defaultValue={user?.displayName}
                                    color="gray"
                                    disabled
                                />
                            </div>
                            <div>
                                <TextInput id="email"
                                    name='email'
                                    placeholder='Your Email'
                                    defaultValue={user?.email}
                                    color="gray"
                                    disabled
                                />
                            </div>
                            <div>
                                <TextInput id="phoneNum"
                                    name='phone'
                                    placeholder='Your Phone Number'
                                    color="gray"
                                />
                            </div>
                            <div className="w-full">
                                <Button type="submit" color='gray'>
                                    Book Appointment
                                </Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default BookingModal;


