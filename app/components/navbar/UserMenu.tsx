"use client"

// import { AiOutlineMenu } from "react-icons/ai"
// import { Avatar } from "../Avatar"
import { useCallback, useState } from "react"
import { MenuItem } from "./MenuItem"
import 'animate.css';
import { UserButton, useAuth } from "@clerk/nextjs"
import { Avatar } from "../Avatar";

export const UserMenu = () => {

    const { userId } = useAuth()

    // const [isOpen, setIsOpen] = useState(false)

    // const toggleOpen = useCallback(() => {
    //     setIsOpen(!isOpen)

    // }, [isOpen])



    return (
        <div className='relative'>
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => { }}
                    className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-2
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                    "
                >
                    Airbnb your home
                </div>

                {
                    userId ? <UserButton afterSignOutUrl="/" /> : <Avatar />
                }
                
                {/* <div
                    onClick={toggleOpen}
                    className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex 
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                    "
                > */}
                {/* <AiOutlineMenu /> */}
                {/* <Avatar /> */}
                {/* </div> */}

            </div>
            {/* {
                isOpen && (
                    <div
                        className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-14
                        text-sm
                        animate__animated animate__fadeIn
                        "
                    >
                        <div className="flex flex-col cursor-pointer">
                            <>
                                <MenuItem
                                    label="Login"
                                    onClick={() => { }}
                                />
                                <MenuItem
                                    label="Sign up"
                                    onClick={() => { }}
                                />
                            </>
                        </div>
                    </div>
                )
            } */}
        </div>
    )
}
