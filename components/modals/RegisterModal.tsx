"use client"

import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal"
import { Modal } from "./Modal"
import { toast } from "react-hot-toast"
import { Button } from "../Button"



export const RegisterModal = () => {

    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        const response = await axios.post('/api/auth/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch((error) => {
                toast.error('Algo ha salido mal, por favor intenta de nuevo', error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    {...register("name", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    {...register("email", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"

                />
                {errors.email && <p className="text-red-500 text-xs italic">Please enter your email.</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    {...register("password", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs italic">Please enter your password.</p>}
            </div>
        </form>
    )

    const footerContent = (
        <footer className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Register with Google"
                icon={FcGoogle}
                onClick={() => { }}
            />
        </footer>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Register"
            actionLabel="Continue"
            buttonLabel="Register"
            body={bodyContent}
            footer={footerContent}
        />
    )
}
