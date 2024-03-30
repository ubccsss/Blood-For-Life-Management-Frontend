import GoogleButton from 'react-google-button'
import { signIn } from "next-auth/react"
import "../app/styles/login-card.css"
import { Dispatch, SetStateAction } from 'react'

interface LoginProps {
    setSignUp: Dispatch<SetStateAction<boolean>>
}

const LoginCard: React.FC<LoginProps> = ({ setSignUp }) => {
    return (
        <section className='login-card'>
            <h1 className='login-card-title'> Login </h1>
            <form className='login-form'>
                <input required className='login-input' type="email" id="email-field" placeholder="Email" maxLength={128} autoFocus />
                <input required className='login-input' type="password" id="password-field" placeholder="Password" maxLength={128} autoFocus />
                <input className='login-submit-button' type="submit" value="Login" />
            </form>
            <hr className='login-form-divider' />
            <GoogleButton onClick={() => signIn('google')}></GoogleButton>
            <p className='sign-up-line'> Don't have an account? <a href="#" className='sign-up-link' onClick={() => setSignUp(true)}>Sign Up</a></p>
        </section >
    )
}

export default LoginCard