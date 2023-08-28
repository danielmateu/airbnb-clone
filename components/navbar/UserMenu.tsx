"use client"

import 'animate.css';
import { UserButton, useAuth } from "@clerk/nextjs"
import { MenuItem } from './MenuItem';
import { BiSolidHome } from 'react-icons/bi';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';


export const UserMenu = () => {

    const { userId } = useAuth()

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className='relative'>
            <div className="flex flex-row items-center gap-3">
                {/* <div onClick={() => { }}
                    className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-2
                    px-4
                    rounded-full
                    transition
                    cursor-pointer
                    "
                >
                    <BiSolidHome className='text-2xl hover:scale-105 hover:text-rose-500 transition' onClick={toggleMenu} />
                    {
                        isOpen && (
                            <div className='absolute top-10 right-0 bg-white shadow-md rounded-md animate__animated animate__fadeIn animate__faster'>
                                <Button variant={'premium'} >
                                    Upgrade!
                                    <Sparkles className='inline-block ml-2' />
                                </Button>
                            </div>
                        )
                    }
                </div> */}

                <ModeToggle />

                <div className="hover:scale-110 transition">
                    {userId && <UserButton afterSignOutUrl="/" />}
                </div>
            </div>
        </div>
    )
}
