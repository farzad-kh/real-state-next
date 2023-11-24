"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/template/SignupPage.module.css"
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import Loaders from '@/loading/Loaders';
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const schema = z.object({
    email: z.string().min(1, { message: "لطفا ایمیل را وارد کنید" }).email({ message: "لطفا ایمیل معتبر وارد کنید" }),
    password: z.string().min(4, { message: "رمز باید حداقل 4 کارکتر باشد" }),
    confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
    message: "رمز و تکرار ان برابر نیست",
    path: ["confirmPassword"],
});

const SignupPage = () => {



    const {
        register,
        handleSubmit,
        watch,
    
        formState: { errors },

    } = useForm({ resolver: zodResolver(schema)})
    console.log(errors);

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    console.log(errors);

    const onSubmit = async (data) => {

        const { email, password, confirmPassword } = data




        setIsLoading(true)


        if (password !== confirmPassword) {
            toast.error("رمز و تکرار ان برار نیست")
            setIsLoading(false)
            return
        }
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Conent-Type": "application/json" },

        })
        const dataForm = await res.json()

        if (res.status === 201) {
            router.push("/signin")
            toast.success("حساب کاربری شما ایجاد شد")

        } else {
            setIsLoading(false)
            toast.error(dataForm.error)
        }
    }
useEffect(()=>{
console.log(watch("email"));
},[])

    return (
        <div className={styles.form}>
            <h4 className='!text-slate-800 z-30'>فرم ثبت نام</h4>

            <form  autoComplete="new-password"  onSubmit={handleSubmit(onSubmit)} action="/form">

                <div className={`formControl !w-full ${errors?.email && "error"}`} >
                    <input style={{background:"#fff"}}
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
                    <small className="er">{errors?.email?.message}</small>

                </div>

                <div className={`formControl  !w-full ${errors?.password && "error"}`} >
                    <input style={{background:"#fff"}}
                        className="inp"
                        {...register("password")}
                        name={"password"} // assign name prop
                        type="password"
                        autoCapitalize="none"
                        id="password"
                         autoComplete="new-password"    />
                    <label className={`textLabel ${watch("password") && "labeltop"}`} htmlFor="password">رمز عبور</label>
                    {/* <i className={errors.emailError ? "font-icons-aw-clear" : "font-icons-aw"}>{(errors.emailError && touched.email) && Xmark}{(!errors.emailError && touched.email) && CircleCheck}</i> */}
                    <small className="er">{errors?.password?.message}</small>

                </div>
                <div className={`formControl !w-full ${errors?.confirmPassword && "error"}`} >
                    <input style={{background:"#fff"}}
                        className="inp"
                        {...register("confirmPassword")}
                        name={"confirmPassword"} // assign name prop
                        type="password"
                        autoCapitalize="none"
                        id="confirmPassword"
                        autoComplete="off" />
                    <label className={`textLabel ${watch("confirmPassword") && "labeltop"}`} htmlFor="confirmPassword">تکرار رمز عبور</label>
                    {/* <i className={errors.emailError ? "font-icons-aw-clear" : "font-icons-aw"}>{(errors.emailError && touched.email) && Xmark}{(!errors.emailError && touched.email) && CircleCheck}</i> */}
                    <small className="er">{errors?.confirmPassword?.message}</small>

                </div>

                {isLoading ? <Loaders type /> :
                    // <button className={email.length <= 0 || password.length <= 0 || rePassword.length <= 0 ? "pointer-events-none opacity-50" : ""} onClick={signupHandler} type='submit'>ثبت نام</button>
                    <button type='submit'>ثبت نام</button>
                }

            </form>
            <p>
                حساب کاربری دارید؟
                <Link href={"/signin"}>ورود</Link>
            </p>

        </div>
    );
};

export default SignupPage;