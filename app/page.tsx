'use client'
import { useState } from 'react'
import LoginCard from '../components/login-card'
import SignUpCard from '../components/sign-up-card'
import Alert from '@mui/material/Alert';
import { redirect } from 'next/navigation';

export default function Home() {
  const [signUp, setSignUp] = useState(false)
  const [error, setError] = useState(true)

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
    <main className="flex flex-col self-center items-center">
      {error && <Alert variant="filled" severity="error" style={{ marginBottom: '1rem', marginTop: '1rem' }}> Registration failed! Please try again! </Alert>}
      <h1 className='text-white'>Blood for Life Home Page </h1>
      <SignUpCard setError={setError} />
      {/* {renderRegistrationCards()} */}
    </main >
  )
}
