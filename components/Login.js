import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"
function Login() {
    return (
        <div className='grid place-items-center'>
            <Image
                src="/logo.webp" alt="logo" width={400} height={400} objectFit="contain"
            />
            <h1
                onClick={signIn}
                className='p-5 m-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login With Facebook</h1>
        </div>
    )
}

export default Login