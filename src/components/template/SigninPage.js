"use client"
import React, { useState } from 'react';
import styles from "@/template/SignupPage.module.css"
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import Loaders from '@/loading/Loaders';
import { signIn } from 'next-auth/react';
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import FormInput from '@/module/FormInput';


const SigninPage = () => {

    const schema = z.object({
        email: z.string().min(1, { message: "لطفا ایمیل را وارد کنید" }),
        password: z.string().min(1, { message: "لطفا رمز عبور را وارد کنید" }),


    })


    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,

        formState: { errors },

    } = useForm({
        resolver: zodResolver(schema), defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = async (data) => {
        setIsLoading(true)
        const { email, password } = data

        const res = await signIn("credentials", {
            email, password, redirect: false
        })


        if (res.error) {
            toast.error(res.error)
            setIsLoading(false)
        } else {
            router.push("/")
            toast.success(`${email} خوش امدید`)
        }
    }

    return (
        <div className={styles.form}>
            <h4 className='!text-slate-800 z-30'>فرم ورود</h4>
            <form autoComplete="new-password" onSubmit={handleSubmit(onSubmit)} >


                <FormInput register={{ ...register("email") }}
                    errors={errors} watch={watch} name={"email"} type={"text"} id={"email"} title={"ایمیل"} />


                <FormInput register={{ ...register("password") }}
                    errors={errors} watch={watch} name={"password"} type={"password"} id={"password"} title={"رمز عبور"} />





                {isLoading ? <Loaders type /> :

                    <button className={watch("email") === "" || watch("passeord") === "" ? "pointer-events-none opacity-50" : ""} type='submit'>ورود</button>
                }

            </form>
            <p>
                حساب کاربری ندارید؟
                <Link href={"/signup"}>ثبت نام</Link>
            </p>

        </div>
    );
};

export default SigninPage;