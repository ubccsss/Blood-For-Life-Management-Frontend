import React from 'react';
import './EventAttendance.css';

//should be removed after Volunteer component is created
interface Volunteer {
  id: number;
  name: string;
  attended: boolean;
}

//should be removed after event component is created
interface EventProps {
  name: string;
  start: string;
  end: string;
  volunteers: Volunteer[];
  description: string;
}

interface EventAttendanceProps {
  event: EventProps;
  updateAttendance: (volunteerId: number, attended: boolean) => void;
}

//should be updated after volunteer/event components are created
const Content: React.FC<EventAttendanceProps> = ({ event, updateAttendance }) => {
  return (
    <div className="event-attendance-container">
      <div className="event-details">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
      </div>
      <div className="volunteer-list">
        {event.volunteers.map(volunteer => (
          <div className="volunteer-item" key={volunteer.id}>
            <span>{volunteer.name}</span>
            <input
              type="checkbox"
              checked={volunteer.attended}
              onChange={(e) => updateAttendance(volunteer.id, e.target.checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const updateAttendance = (volunteerId: number, attended: boolean) => {
  // should do sth later to update the state to reflect the change like on db
  // console.log(`Volunteer ${volunteerId} attendance marked as: ${attended}`);
};

export default Content;
