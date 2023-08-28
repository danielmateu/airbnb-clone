"use client"

import Image from "next/image"

export const Avatar = () => {
    return (
        // <div>Avatar</div>
        <Image
            className="rounded-full hidden md:block"
            height={30}
            width={30}
            alt="avatar"
            src="/images/placeholder.jpg"
        />
    )
}
