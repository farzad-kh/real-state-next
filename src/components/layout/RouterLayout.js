"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RouterLayout = ({ role }) => {

    const pathname = usePathname()
    const router = [
        { href: "/dashboard", title: "حساب کاربری" },
        { href: "/dashboard/my-profiles", title: "آگهی های من" },
        { href: "/dashboard/add", title: "ثبت آگهی", },
        // { href: "/admin", title: "در انتظار تایید",role},
    ]
    return (
        <>
            {router.map(item =>
                <Link key={item.href} className={`${pathname === item.href ? "text-[cornflowerblue]" : ""}`} href={item.href}>{item.title}</Link>
            )}

            {role === "ADMIN" ? <Link className={`${pathname === "/admin" ? "text-[cornflowerblue]" : ""}`} href="/admin">در انتظار تایید</Link> : null}

        </>
    );
};

export default RouterLayout;