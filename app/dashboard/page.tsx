import ProfileCard from "@/components/ProfileCard";
import FormDialog from "./dashboard";
import EventList from "@/components/events/EventList";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row h-16">
        <ProfileCard
          firstName="John"
          lastName="Doe"
          email="john.doe@gmail.com"
          phoneNumber="123-456-7890"
          profileImage="https://via.placeholder.com/150"
        />
        <FormDialog />
      </div>

      <div className="flex-1 grow pt-12">
        <div className="border-solid border-2 border-red-500 bg-white rounded-xl">
          <EventList events={[
            {
              key: 1,
              name: "Event 1",
              start: "2021-01-01T",
              end: "2021-01-01T",
              volunteers: 5,
              description: "Description 1"
            },
          ]} />
        </div>
      </div>
    </>
  );
}
