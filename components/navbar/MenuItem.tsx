"use client"

interface MenuItemProps {
    onClick: () => void
    label: string
}

export const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}: MenuItemProps) => {
    return (
        <div
            onClick={onClick}
            className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition-all font-semibold">
            {label}
        </div>
    )
}
