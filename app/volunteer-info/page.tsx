import ViewVolunteers from "./ViewVolunteers"

export default function VolunteerInfo() {
    const sampleData = [
        { name: "Steph", email: "steph123@gmail.com", studentNumber: 123456, hours: 1 },
        { name: "Karen", email: "karen123@gmail.com", studentNumber: 567890, hours: 10 },
        { name: "Janaye", email: "janaye123@gmail.com", studentNumber: 654321, hours: 100 },
        { name: "Mave", email: "mave123@gmail.com", studentNumber: 135791, hours: 1000 },
        { name: "Heaton", email: "heaton123@gmail.com", studentNumber: 246800, hours: 10000 },
        { name: "Rus", email: "rus123@gmail.com", studentNumber: 345678, hours: 100000 },
        { name: "Anshul", email: "anshul123@gmail.com", studentNumber: 242424, hours: 1000000}
    ]

    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex flex-col mb-8">
                <div className="flex flex-row">
                    <h1 className="font-bold text-lg mb-3">Search:</h1>
                </div>

                <input className="w-[30vw] h-[5vh] border rounded outline-none focus:border-[#9DE1DA]"></input>
            </div>
            
            
            <ViewVolunteers data={sampleData}/>
        </div>
    )
}