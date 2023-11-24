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


const SigninPage = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,

        formState: { errors },

    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = async (data) => {
        setIsLoading(true)
const {email,password}=data

        const res = await signIn("credentials", {
            email, password, redirect: false
        })


        if (res.error) {
            toast.error(res.error)
            setIsLoading(false)
        } else {
            router.push("/")
            toast.success(`${email} خوشامدید`)
        }
    }

    return (
        <div className={styles.form}>
            <h4 className='!text-slate-800 z-30'>فرم ورود</h4>
            <form autoComplete="new-password" onSubmit={handleSubmit(onSubmit)} >


                <div className={`formControl !w-full ${errors?.email && "error"}`} >
                    <input style={{ background: "#fff" }}
                        className="inp"
                        {...register("email")}
                        name={"email"} // assign name prop
                        type="text"
                        id="email"
                        autoCapitalize="none"
                        autoCorrect="false"
                        aria-disabled="false"
                        autoComplete="on" />
                    <label className={`textLabel ${watch("email") && "labeltop"}`} htmlFor="email">ایمیل</label>
                    {/* <i className={errors.emailError ? "font-icons-aw-clear" : "font-icons-aw"}>{(errors.emailError && touched.email) && Xmark}{(!errors.emailError && touched.email) && CircleCheck}</i> */}


                </div>

                <div className={`formControl  !w-full ${errors?.password && "error"}`} >
                    <input style={{ background: "#fff" }}
                        className="inp"
                        {...register("password")}
                        name={"password"} // assign name prop
                        type="password"
                        autoCapitalize="none"
                        id="password"
                        autoComplete="new-password" />
                    <label className={`textLabel ${watch("password") && "labeltop"}`} htmlFor="password">رمز عبور</label>
                    {/* <i className={errors.emailError ? "font-icons-aw-clear" : "font-icons-aw"}>{(errors.emailError && touched.email) && Xmark}{(!errors.emailError && touched.email) && CircleCheck}</i> */}


                </div>





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