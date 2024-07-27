'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import LoginForm from './SignInForm'


const AuthForm = ({type} : {type: string}) => {
    const formSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
      })
    // const user = {firstname: 'ayo', lastname: 'mide'};
    const user = null;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
            <Image 
                src="/logo.svg"
                width={34}
                height={34}
                alt="Horizon logo"
                className="size-[34px] max-xl:size-14"
            />
            <h1 className="sidebar-logo">Ayo pay</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {
                        user? 'Link Account' : type == 'sign in' ? 'sign in' : 'sign up'
                    }
                </h1>
                <p className='text-16 text-gray-900 font-normal'>
                    {user ? 'Link your account to get started' : 'Please enter your details'}
                </p>
            </div>
        </header>
        {
            user? <div className='flex flex-col gap-8'>
                plaidlink coming soon...
            </div> : (
                <div>
                    <LoginForm />
                </div>
            )
        }
    </section>
  )
}

export default AuthForm