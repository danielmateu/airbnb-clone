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

                <div
                    className="
                    hidden
                    lg:block
                    gap-3
                    py-2
                    px-4
                    w-full
                    md:w-auto
                    rounded-full
                    hover:bg-gray-100
                    transition
                    cursor-pointer
                    font-semibold
                    "
                >
                    Pon tu casa en Airbnb
                </div>

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    py-1
                    px-3
                    border-[1px]
                    dark:border-[0px]
                    w-full
                    md:w-auto
                    rounded-full
                    shadow-sm
                    hover:shadow-md
                    transition
                    cursor-pointer
                    "
                >
                    <ModeToggle />
                    <div className="hover:scale-110 transition">
                        {userId && <UserButton afterSignOutUrl="/" />}
                    </div>
                </div>


            </div>
        </div>
    )
}
