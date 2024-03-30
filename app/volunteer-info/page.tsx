'use client'
import ViewVolunteers from "./ViewVolunteers"
import { useState, ChangeEvent } from "react"
import { Select, SelectChangeEvent, MenuItem, FormControl, InputLabel } from '@mui/material'

export default function VolunteerInfo() {
    const sampleData = [
        { name: "Steph", email: "test@gmail.com", studentNumber: 123456, hours: 1 },
        { name: "Karen", email: "karen123@gmail.com", studentNumber: 567890, hours: 10 },
        { name: "Janaye", email: "janaye123@gmail.com", studentNumber: 654321, hours: 100 },
        { name: "Mave", email: "mave123@gmail.com", studentNumber: 135791, hours: 1000 },
        { name: "Heaton", email: "heaton123@gmail.com", studentNumber: 246800, hours: 10000 },
        { name: "Rus", email: "rus123@gmail.com", studentNumber: 345678, hours: 100000 },
        { name: "Anshul", email: "anshul123@gmail.com", studentNumber: 242424, hours: 1000000 }
    ]

    const [searchField, setSearchField] = useState("")
    const [searchCategory, setSearchCategory] = useState("name")

    const filtered = sampleData.filter((person) => {
        const input = String(person[searchCategory as keyof typeof sampleData[0]]).toLowerCase();
        return (
            input.includes(searchField.toLowerCase())
        )
    })

    function search() {
        return <ViewVolunteers data={filtered} />
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchField(e.target.value);
    }

    function handleSelection(e: SelectChangeEvent) {
        setSearchCategory(e.target.value)
    }

    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex flex-col mb-8">
                <h1 className="font-bold text-lg mb-3">Search:</h1>

                <div className="flex flex-row gap-x-5">
                    <input
                        className="w-[30vw] h-[8vh] border rounded outline-none p-2 focus:border-[#9DE1DA]"
                        onChange={handleChange}
                    />

                    <FormControl sx={selectStyle}>
                        <InputLabel>Options</InputLabel>
                        <Select
                            label="Options"
                            value={searchCategory}
                            defaultValue="name"
                            onChange={handleSelection}
                            sx={ { backgroundColor:"white" }}
                        >
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                            <MenuItem value="studentNumber">Student Number</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            {search()}

        </div>
    )
}

const selectStyle = {
    height: "8vh",
    width: "15vw",
    "& label.Mui-focused": { color: "#9DE1DA" },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#9DE1DA"
        }
      }
}
