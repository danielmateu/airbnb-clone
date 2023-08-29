"use client"

import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal"


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
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    return (
        <div></div>
    )
}
