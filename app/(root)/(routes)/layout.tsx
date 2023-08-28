"use client"

import { Navbar } from "@/app/components/navbar/Navbar"

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="py-20 px-12">
                {children}
            </main>

        </div>
    )
}

export default RootLayout
