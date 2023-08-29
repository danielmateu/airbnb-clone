"use client"

import { Modal } from "@/components/modals/Modal"
import { RegisterModal } from "@/components/modals/RegisterModal"
import { Navbar } from "@/components/navbar/Navbar"

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            {/* <Modal
                isOpen={false}
                onClose={() => { }}
                onSubmit={() => { }}
                title="I am a Modal"
                actionLabel="Submit"
                buttonLabel="Submit"
                body={<p className="text-center"></p>}
                footer={<p className="text-center"></p>}
                disabled={false}
                secondaryActionLabel=''
            /> */}
            <RegisterModal />
            <Navbar />
            <main className="py-20 px-12">
                {children}
            </main>

        </div>
    )
}

export default RootLayout
