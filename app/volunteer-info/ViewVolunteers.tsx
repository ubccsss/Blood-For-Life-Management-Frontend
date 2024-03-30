import React from "react";

interface Volunteer {
    name: string;
    email: string;
    studentNumber: number;
    hours: number;
}

interface VolunteerRowProps {
    item: Volunteer;
}

interface ViewVolunteersProps {
    data: Volunteer[];
}

const VolunteerRow: React.FC<VolunteerRowProps> = ({ item }) => {
    return (
        <React.Fragment>
            <div className="p-3 border-r border-b grid items-center">{item.name}</div>
            <div className="p-3 border-r border-b grid items-center">{item.email}</div>
            <div className="p-3 border-r border-b grid items-center">{item.studentNumber}</div>
            <div className="p-3 border-b grid items-center">{item.hours}</div>
        </React.Fragment>
    );
};

const ViewVolunteers: React.FC<ViewVolunteersProps> = ({ data }) => {
    return (
        <div className="max-h-[65vh] grid grid-cols-4 border bg-white rounded-lg overflow-scroll text-base">
            <div className="bg-[#FFC1BE] p-3 font-bold border-r sticky top-0 grid items-center">Name</div>
            <div className="bg-[#FFC1BE] p-3 font-bold border-r sticky top-0 grid items-center">Email</div>
            <div className="bg-[#FFC1BE] p-3 font-bold border-r sticky top-0 grid items-center">Student Number</div>
            <div className="bg-[#FFC1BE] rounded-tr-lg p-3 font-bold sticky top-0 grid items-center">Hours</div>

            {data.map((item, index) => (
                <VolunteerRow key={index} item={item} />
            ))}
        </div>
    );
};

export default ViewVolunteers;
