import GoogleButton from 'react-google-button'
import { signIn } from "next-auth/react"
import "../app/styles/card-component.css"
import { Dispatch, SetStateAction} from 'react'

interface LoginProps {
    setSignUp : Dispatch<SetStateAction<boolean>>
}

const LoginCard : React.FC<LoginProps> = ({setSignUp}) => {
    return (
        <section className="bg-indigo-500">
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
                <p> Don't have an account? <a href="#" onClick={() => setSignUp(true)}>Sign Up</a></p>
            </div>
        </section >
    )
}

export default LoginCard