import React from 'react'
import { SubmitButton } from '@/components/submit-button'
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';


const LoginForm = () => {
    const handleSubmit = () => {
        console.log("let's go...")
    }
  return (
    <form className="flex flex-col w-full justify-center relative">
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6 focus:border-green-600"
            name="email"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="password">
            <p className='text-sm'>Password</p>
            </label>
            {/* <Link href={'./'} className='text-sm font-light absolute top-8 left-56 text-blue-400'>Forgot Password</Link> */}
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6 focus:border-blue-950"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <SubmitButton

            formAction={handleSubmit}
            className="bg-blue-600 rounded-md px-4 py-3 text-white text-lg mb-2"
            pendingText="Signing In..."
            >
            Sign In
            </SubmitButton>
        </form>
  )
}

export default LoginForm;