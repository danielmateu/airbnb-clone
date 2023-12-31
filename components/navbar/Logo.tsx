'use client'

import Image from "next/image"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const Logo = () => {

    const router = useRouter()

    return (
        <Link href={'/'}>
            <Image
                src='/images/logo.png'
                alt='Logo'
                width={100}
                height={100}
                className='cursor-pointer hidden md:block hover:scale-105 transition'
            />
        </Link>
    )
}
