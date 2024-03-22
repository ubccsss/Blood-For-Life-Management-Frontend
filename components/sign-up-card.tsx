import { FormEvent, useState, Dispatch, SetStateAction } from "react"
import "../app/styles/sign-up-card.css"

interface SignUpProps {
    setError: Dispatch<SetStateAction<boolean>>
}

const SignUpCard: React.FC<SignUpProps> = ({ setError }) => {
    // TODO Connect to an API implemented in the backend for user verification
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        // Redirect to user's dashboard if true. Otherwise, stay on this page and display an error banner
        if (true) {
            console.log('Clicking')
            window.location.href = "/dashboard";
            setError(false)    // disables banner if active
        } else {
            setError(true)
        }
    }

    return (
        <section className="sign-up-card">
            <h1 className="sign-up-h1"> Sign Up </h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <div className="sign-up-div">
                    <input className="sign-up-input" type="text" id="first-name-field" placeholder="First Name" />
                    <input className="sign-up-input" type="text" id="last-name-field" placeholder="Last Name" />
                </div>

                <div className="sign-up-div">
                    <input className="sign-up-input" type="email" id="email-field" placeholder="Email" />
                    <input className="sign-up-input" type="password" id="password-field" placeholder="Password" minLength={8} />
                </div>

                <div className="sign-up-div">
                    <input className="sign-up-input" type="text" id="student-number-field" placeholder="Student Number" />
                </div>

                <div className="sign-up-div">
                    <input type="submit" className="sign-up-submit-button" value="Submit" />
                </div>
            </form>
        </section>
    )
}

export default SignUpCard