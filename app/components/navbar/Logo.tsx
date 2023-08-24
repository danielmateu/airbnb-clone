'use client'

import Image from "next/image"
import { useRouter } from 'next/navigation'

export const Logo = () => {

    const router = useRouter()

    return (

        <Image
            src='/images/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='cursor-pointer hidden md:block hover:scale-105 transition'
        />
    )
}
