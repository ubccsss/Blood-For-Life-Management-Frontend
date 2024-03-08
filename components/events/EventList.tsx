import EventCard, { EventCardProps } from "./EventCard";

export default function EventList({ events }: { events: EventCardProps[] }) {
    return (
        <div className="flex flex-col items-center justify-between p-12">
            <div className="flex flex-col">
                {events.map(event => (
                    <EventCard
                        key={event.key}
                        name={event.name}
                        start={event.start}
                        end={event.end}
                        volunteers={event.volunteers}
                        description={event.description}
                    />
                ))}
            </div>
        </div>
    )

}