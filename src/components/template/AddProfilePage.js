"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/template/AddProfilePage.module.css"
import TextInput from '@/module/TextInput';
import RadioList from '@/module/RadioList';
import TextList from '@/module/TextList';
import CustomDatePicker from '@/module/CustomDatePicker';

import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';
import Loaders from '@/loading/Loaders';

const AddProfilePage = ({ data }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    })
    useEffect(() => {

        if (data !== undefined) {
            setProfileData({ ...data })
        }
    }, [data])
    const router = useRouter()
    console.log(data);
    //  const a=  Object.values(profileData).every(value => value !== "" && value !== null && value !== undefined);
    //  console.log(a);
    const submitHandler = async () => {
        setIsLoading(true)
        if (isNaN(profileData.price)) {
            toast.error("لطفا قیمت را درست وارد کنید");
            console.log(isNaN(profileData.price));
            setIsLoading(false);
            return
        }

        const res = await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()

        if (data.error) {

            toast.error(data.error)
            setIsLoading(false)
        } else {

            toast.success(data.message)
            setIsLoading(false)
            router.refresh()
            router.push("/dashboard/my-profiles")
        }
    }

    const editHandler = async () => {
        setIsLoading(true)
        if (isNaN(profileData.price)) {
            toast.error("لطفا قیمت را درست وارد کنید");
            console.log(isNaN(profileData.price));
            setIsLoading(false);
            return
        }
        const res = await fetch("/api/profile", {
            method: "PATCH",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (data.error) {

            toast.error(data.error)
            setIsLoading(false)
        } else {

            toast.success(data.message)
            setIsLoading(false)
            router.refresh()
          router.push("/dashboard/my-profiles")
        }
    }

    return (
        <div className={styles.container}>
            <h3>{data ? "ویرایش اگهی" : "ثبت اگهی"}</h3>
            <div className='flex w-full h-full flex-col'>


                <TextInput
                    title="عنوان اگهی"
                    name="title"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="توضیحات"
                    name="description"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    textarea={true}
                />
                <TextInput
                    title="آدرس"
                    name="location"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="شماره تماس"
                    name="phone"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="قیمت(تومان)"
                    name="price"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="بنگاه"
                    name="realState"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <RadioList profileData={profileData} setProfileData={setProfileData} />
                <TextList
                    title="امکانات رفاهی"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="amenities"
                />
                <TextList
                    title="قوانین"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    type="rules"
                />
               
                <CustomDatePicker
                    profileData={profileData}
                    setProfileData={setProfileData}
                />

                {isLoading ? <Loaders type /> :

                    <button className={` ${styles.submit}`}
                        onClick={() => { data ? editHandler() : submitHandler() }} type='submit'>{data ? "ویرایش اگهی" : "ثبت اگهی"}
                    </button>
                }

             
            </div>
        </div>
    );
};

export default AddProfilePage;