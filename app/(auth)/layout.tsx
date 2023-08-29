"use client"

import { Modal } from "@/components/modals/Modal"

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center h-screen">{children}</div>
    )
}

export default AuthLayout

