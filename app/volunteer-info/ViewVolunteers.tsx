import React from "react";

interface Volunteer {
    name: string;
    email: string;
    studentNumber: number;
    hours: number;
}

interface ViewVolunteersProps  {
    data: Volunteer[];
}

const ViewVolunteers: React.FC<ViewVolunteersProps> = ({ data }) => {
    return (
        <div className="max-h-[40vh] grid grid-cols-4 border bg-white rounded-lg overflow-auto text-base">

            <div className="bg-[#FFC1BE] p-2 font-bold border-r sticky top-0">Name</div>
            <div className="bg-[#FFC1BE] p-2 font-bold border-r sticky top-0">Email</div>
            <div className="bg-[#FFC1BE] p-2 font-bold border-r sticky top-0">Student Number</div>
            <div className="bg-[#FFC1BE] rounded-tr-lg p-2 font-bold sticky top-0">Hours</div>

            {data.map((item) => 
            <React.Fragment>
                <div className="p-2 border-r border-b">{item.name}</div>
                <div className="p-2 border-r border-b">{item.email}</div>
                <div className="p-2 border-r border-b">{item.studentNumber}</div>
                <div className="p-2 border-b">{item.hours}</div>
            </React.Fragment>
            )}

        </div>

    );
};

export default ViewVolunteers;
