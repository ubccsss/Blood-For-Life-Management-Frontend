'use client'
import {useState} from 'react'
import LoginCard from '../components/login-card'
import SignUpCard from '@/components/sign-up-card'
import Alert from '@mui/material/Alert';

export default function Home() {
  const [signUp, setSignUp] = useState(false)
  const [error, setError] = useState(false)

  const renderRegistrationCards = () => {
    if (signUp) {
      return <SignUpCard
      setError={setError}
      />
    } else {
      return <LoginCard
      setSignUp={setSignUp}
      />
    }
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <Alert variant="filled" severity="error"> Registration failed! Please try again! </Alert>}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Blood for Life Home Page </h1>
      </div>
      {renderRegistrationCards()}
    </main>
  )
}
