"use client"

import ClientOnly from "@/components/ClientOnly"
import { Modal } from "@/components/modals/Modal"
import { Navbar } from "@/components/navbar/Navbar"

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <ClientOnly>
                <Modal
                    isOpen={true}
                    onClose={() => { }}
                    onSubmit={() => { }}
                    title="Hello World"
                    body={<div>Modal Body</div>}
                    footer={<div>Modal Footer</div>}
                    actionLabel="Action Label"
                    disabled={false}
                />
                <Navbar />
            </ClientOnly>
            <main className="py-20 px-12">
                {children}
            </main>

        </div>
    )
}

export default RootLayout
