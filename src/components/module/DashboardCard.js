"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "@/module/Card";
import styles from "@/module/DashboardCard.module.css";
import Loaders from "@/loading/Loaders";

function DashboardCard({ data }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    setIsLoading(true)
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE"

    })
    const resultDelete = await res.json()
    if (resultDelete.error) {

      toast.error(resultDelete.error)
      setIsLoading(false)
    } else {

      toast.success(resultDelete.message)
      setIsLoading(false)
      router.refresh()

    }
  };


  return (
    <div className={`${styles.container} ${isLoading && "pointer-events-none"}`}>
      <Card data={data} key={data._id} />

      <div className={styles.main}>
        <div className="flex justify-between items-center w-full flex-col h-full ">
        {data.published?<div className="font-semibold text-black">اگهی شما انتشار یافت</div>:<div className="font-semibold text-[#d0671c]">در انتظار تایید</div>}
      <div className="flex w-full h-full items-end gap-4 ">
      <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>

        {isLoading ? <Loaders type  /> :
          <button onClick={deleteHandler} >
            حذف آگهی
            <AiOutlineDelete />
          </button>
        }
      </div>
        </div>
      </div>
   
    </div>
  );
}

export default DashboardCard;
