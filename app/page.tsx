'use client'
import Image from 'next/image'
import GoogleButton from 'react-google-button'
import { signIn } from "next-auth/react"
import LoginCard from '../component/login-card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Blood for Life Home Page </h1>
      </div>
      <LoginCard />
    </main>
  )
}
