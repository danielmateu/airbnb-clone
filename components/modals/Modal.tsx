"use client"

import { IoMdClose, IoMdRocket } from "react-icons/io"

import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../inputs/Input";
import { error } from "console";
// import { Button } from "../ui/button";



interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    buttonLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;

}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    buttonLabel
}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) return

        setShowModal(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return

        onSubmit()

    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {

        if (disabled || !secondaryAction) return

        secondaryAction()
    }, [disabled, secondaryAction])

    if (!isOpen) return null

    return (
        <>
            <div className="
            flex
            justify-center
            items-center
            overflow-x-hidden
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800/50
            ">
                <div className="
                relative
                w-5/6
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                h-3/6
                md:h-auto
                ">
                    {/*content*/}
                    <div className={`
                    translate 
                    duration-300
                    h-full
                    ${showModal ? "translate-y-0" : "translate-y-full"}
                    ${showModal ? "opacity-100" : "opacity-0"}
                    `}>
                        <div className="
                        translate
                        h-full
                        md:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none
                        ">
                            {/*header*/}
                            <header className="
                            flex
                            items-center
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px]
                            ">
                                <button
                                    onClick={handleClose}
                                    className="
                                p-1
                                border-0
                                hover:poacity-70
                                transition
                                absolute
                                left-9
                                ">
                                    <IoMdClose size={18} className='dark:text-black' />
                                </button>
                                <p className="text-lg font-semibold dark:text-black">
                                    {title}
                                </p>
                            </header>
                            {/*body*/}
                            <section className="dark:text-black relative p-6 flex-auto">
                                {body}
                                {/* <Input
                                    id="name"
                                    label="Name"
                                    type="text"
                                    disabled={false}
                                    formatPrice={false}
                                    required={true}
                                    register={ }
                                    errors={null}

                                /> */}
                            </section>
                            {/*footer*/}
                            <footer className="
                            flex
                            flex-col
                            gap-2
                            p-6 dark:text-black ">
                                <div className="
                                flex
                                flex-row
                                items-center
                                gap-4
                                w-full
                                ">
                                    {/* <Button
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                        className="relative w-full dark:text-black"
                                        variant={'premium'}
                                    >
                                        {buttonLabel}
                                    </Button> */}
                                    {
                                        secondaryAction && secondaryActionLabel && (

                                            <Button
                                                outline
                                                disabled={disabled}
                                                label={secondaryActionLabel}
                                                onClick={handleSecondaryAction}
                                            // icon={IoMdRocket}
                                            // outline
                                            />
                                        )
                                    }

                                    <Button
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                        label={buttonLabel}
                                    // icon={IoMdRocket}
                                    // outline
                                    />
                                </div>
                                {footer}
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
