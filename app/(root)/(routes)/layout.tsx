"use client"

import { Modal } from "@/components/modals/Modal"
import { Navbar } from "@/components/navbar/Navbar"

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <Modal
                isOpen={true}
                onClose={() => { }}
                onSubmit={() => { }}
                title="Hello World"
                body={<p className="text-center">This is the Modal Body</p>}
                footer={<p className="text-center">Modal Footer</p>}
                actionLabel=""
                disabled={false}
                secondaryLabel='My Button'
            />
            <Navbar />
            <main className="py-20 px-12">
                {children}
            </main>

        </div>
    )
}

export default RootLayout
