import React, { useState } from 'react';
import EventAttendance from './EventAttendance';

const EventAttendancePage = () => {
    const [event, setEvent] = useState({
        name: 'Sample Event',
        start: '2024-02-01 09:00 PST',
        end: '2024-02-01 11:00 PST',
        volunteers: [
            { id: 1, name: 'Volunteer 1', attended: false },
            { id: 2, name: 'Volunteer 2', attended: false },
            { id: 3, name: 'Volunteer 3', attended: false }
        ],
        description: 'This is a sample event description.'
    });

    const updateAttendance = (volunteerId: number, attended: boolean) => {
        setEvent(prevEvent => ({
            ...prevEvent,
            volunteers: prevEvent.volunteers.map(volunteer => 
                volunteer.id === volunteerId ? { ...volunteer, attended: attended } : volunteer
            )
        }));
    };

    return (
        <div>
            <EventAttendance event={event} updateAttendance={updateAttendance} />
        </div>
    );
}

export default EventAttendancePage;
