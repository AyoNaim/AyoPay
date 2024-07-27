import React from 'react'
import { SubmitButton } from '@/components/submit-button'
import { redirect } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link'

const SignInForm = () => {
    const handleSignUp = () => {
        console.log("let's go...")
    }
  return (
    <div className='w-full flex justify-center items-center flex-col'>
    <form className="flex flex-col w-3/5 justify-center mt-4">
          <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-between items-center gap-3'>
              <Image src={'/logo.svg'} alt='logo' width={24} height={24}/>
              <p className='font-semibold text-lg'>Ayopay</p>
            </div>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                Sign Up
              </h1>
              <p>Please enter your details</p>
          </div>
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>First Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            name="name"
            placeholder="John"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Last Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Doe"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Address</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Enter your Address"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>City</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Example:San Francisco"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>State</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Example: California"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Postal Code</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Example: 11234"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Date Of Birth</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="dd/mm/yyyy"
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>SSN</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder="Example:1234"
            required
            />
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="email"
            name="email"
            placeholder="john@doe.com"
            required
            />
            <label className="text-sm" htmlFor="password">
            <p className='text-sm'>Password</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="●●●●●●●●●●"
            required
            />
            <SubmitButton
            className="bg-blue-900 rounded-md px-4 py-2 text-white mb-2"
            pendingText="Signing In..."
            >
            Sign Up
            </SubmitButton>
            <div className='flex justify-center items-center mb-11'>
              <p>Have an account <Link href={'/SignIn'} className='text-blue-600'>Sign in</Link></p>
            </div>
       </form>
      </div>
  )
}

export default SignInForm