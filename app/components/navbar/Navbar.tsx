"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "./Logo"
import { Search } from "./Search"
import { UserMenu } from "./UserMenu"


export const Navbar = () => {
    return (
        <nav className="fixed w-full z-10 shadow-sm dark:bg-gray-800">
            <div className="py-2 border-b-[1px]">
                {/* <Container > */}
                <div className="
                    flex 
                    flex-row 
                    items-center 
                    justify-between 
                    gap-3 
                    md:gap-0 px-4
                    "
                >
                    <Logo />
                    <Search />
                    <ModeToggle />
                    <UserMenu />
                </div>
                {/* </Container> */}
            </div>
        </nav>
    )
}
