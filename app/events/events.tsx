import Event from './event';

export default function Events() {
  const events = [
    {
      id: 1,
      name: 'UBC Blood Drive',
      start: '10:00 AM',
      end: '12:00 PM',
      volunteers: 5,
      description: 'Blood drive at UBC Nest\n'
    },
    {
      id: 2,
      name: 'UBC Blood for Life Fundraiser',
      start: '2:00 PM',
      end: '4:00 PM',
      volunteers: 3,
      description: `Come buy some delicious donuts from Krispy Kreme for this fundraiser! 
      All proceeds go towards BC Cancer research for blood cancers! aaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
    },
  ];
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <div className="flex flex-col">
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
      </div>
    </main>
  )
}