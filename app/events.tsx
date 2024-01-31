import Event from './event';

export default function Events() {
    const events = [
        {
          id: 1,
          name: 'Event 1',
          start: '10:00 AM',
          end: '12:00 PM',
          volunteers: 5,
          description: 'Description of Event 1'
        },
        {
          id: 2,
          name: 'Event 2',
          start: '2:00 PM',
          end: '4:00 PM',
          volunteers: 3,
          description: 'Description of Event 2'
        },
      ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {events.map(event => (
            <Event
            key={event.id}
            name={event.name}
            start={event.start}
            end={event.end}
            volunteers={event.volunteers}
            description={event.description}
            />
        ))}

        </main>
    )
}