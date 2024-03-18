import {FormEvent, useState, Dispatch, SetStateAction} from "react"
import {useRouter} from "next/router"

interface SignUpProps {
    setError : Dispatch<SetStateAction<boolean>>
}

const SignUpCard : React.FC<SignUpProps> = ({setError}) => {

    // TODO Connect to an API implemented in the backend for user verification
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (true) { // replace with conditional depending on the value from the backend
            const router = useRouter()
            router.push("/dashboard")
        } else
            setError(true)
    }

    return (
        <section className="vh-100">
            <h1> Sign Up </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="first-name-field" placeholder="First Name" />
                    <input type="text" id="last-name-field" placeholder="Last Name" />
                    <input type="text" id="student-number-field" placeholder="Student Number" />
                    <input type="email" id="email-field" placeholder="Email" />
                    <input type="password" id="password-field" placeholder="Password" />
                    <button type="submit"> Done </button>
                </div>
            </form>
        </section >
    )
}

export default SignUpCard