"use client"



const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        // <div >{children}</div>
        <div className="flex items-center justify-center">{children}</div>
    )
}

export default AuthLayout

