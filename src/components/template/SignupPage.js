"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/template/SignupPage.module.css"
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/navigation'
import Loaders from '@/loading/Loaders';


const SignupPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const signupHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        if (password !== rePassword) {
            toast.error("رمز و تکرار ان برار نیست")
            setIsLoading(false)
            return
        }
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Conent-Type": "application/json" },

        })
        const data = await res.json()
     
        if (res.status === 201) {
            router.push("/signin")
         
        } else {
            setIsLoading(false)
            toast.error(data.error)
        }
    }


    return (
        <div className={styles.form}>
            <h4>فرم ثبت نام</h4>
      
            <form>
                <label>ایمیل:</label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <label>رمز عبور:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <label>تکرار رمز عبور:</label>
                <input type='password' value={rePassword} onChange={e => setRePassword(e.target.value)} />
                {isLoading ? <Loaders type /> :

                    <button className={email.length <= 0 || password.length <= 0 || rePassword.length <= 0 ? "pointer-events-none opacity-50" : ""} onClick={signupHandler} type='submit'>ثبت نام</button>
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