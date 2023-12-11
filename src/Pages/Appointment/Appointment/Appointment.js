import React, { useState } from 'react';
import AppintmentBanner from '../AppointmentBanner/AppintmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppintmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppintmentBanner>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;