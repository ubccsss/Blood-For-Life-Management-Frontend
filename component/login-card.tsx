import GoogleButton from 'react-google-button'
import { signIn } from "next-auth/react"

export default function LoginCard() {
    return (
        <section className="vh-100">
            <h1> Login </h1>
            <form>
                <div>
                    <input type="email" id="email-field" placeholder="Email" />
                    <input type="password" id="password-field" placeholder="Password" />
                    <button type="submit"> Login </button>
                </div>
            </form>
            <hr />
            <GoogleButton onClick={() => signIn('google')}></GoogleButton>
            <div>
                <p> Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </section >
    )
}