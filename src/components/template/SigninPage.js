"use client"
import React, { useState } from 'react';
import styles from "@/template/SignupPage.module.css"
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/navigation'
import Loaders from '@/loading/Loaders';
import { signIn } from 'next-auth/react';


const SigninPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [isLoading, setIsLoading] = useState(false)
    const signinHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault()
       
       const res=await signIn("credentials",{
        email,password,redirect:false
       })

  
        if (res.error) {
            toast.error(res.error)
            setIsLoading(false)
        } else {
            router.push("/")
           
        }
    }

    return (
        <div className={styles.form}>
            <h4>فرم ورود</h4>
            <form>
                <label>ایمیل:</label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <label>رمز عبور:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
             
                {isLoading ? <Loaders type /> :

                    <button className={email.length <= 0 || password.length <= 0  ? "pointer-events-none opacity-50" : ""} onClick={signinHandler} type='submit'>ورود</button>
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