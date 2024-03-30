import { FormEvent, useState, Dispatch, SetStateAction } from "react"
import "../app/styles/sign-up-card.css"

interface SignUpProps {
    setError: Dispatch<SetStateAction<boolean>>
}

const SignUpCard: React.FC<SignUpProps> = ({ setError }) => {
    // TODO Connect to backend API (DNE yet ATTOW) for user verification
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        // Redirect to user's dashboard if true. Otherwise, stay on this page and display an error banner
        if (false) {
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
                    <input className="sign-up-input" required type="text" maxLength={128} id="first-name-field" placeholder="First Name" pattern="([A-Z]|[a-z])+" title="Please enter only letters for first name (A-Z or a-z)" />
                    <input className="sign-up-input" required type="text" maxLength={128} id="last-name-field" placeholder="Last Name" pattern="([A-Z]|[a-z])+" title="Please enter only letters for last name (A-Z or a-z)" />
                </div>

                <div className="sign-up-div">
                    <input className="sign-up-input" required type="email" maxLength={128} id="email-field" placeholder="Email" />
                    <input className="sign-up-input" required type="password" id="password-field" placeholder="Password" minLength={8} maxLength={128} />
                </div>

                <div className="sign-up-div">
                    <input className="sign-up-input" required type="text" id="student-number-field" placeholder="Student Number" minLength={8} maxLength={8} pattern="\d+" title="Please enter digits for student number (0-9)" />
                </div>

                <div className="sign-up-div">
                    <input type="submit" className="sign-up-submit-button" value="Submit" />
                </div>
            </form>
        </section>
    )
}

export default SignUpCard