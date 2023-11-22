"use client";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/AdminCard.module.css";
import { useState } from "react";
import Loaders from "@/loading/Loaders";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  // const publishHandler = async () => {
  //   const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
  //   const result = await res.json();
  //   if (result.message) {
  //     toast.success(result.message);
  //     router.refresh();
  //   }
  // };
  const [comfirm, setComfirm] = useState(false)
  const [isLoad, setIsload] = useState(false)
  const [loadingState, setLoadingState] = useState({ publish: false, delete: false })
  const publishHandler = async () => {
    setLoadingState({ ...loadingState, publish: true })
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH"
    })
    const result = await res.json()

    if (result.message) {
      setLoadingState({ ...loadingState, publish: false })
      toast.success(result.message)
      router.refresh();
    }
  }
  const deleteHandler = async () => {
    setLoadingState({ ...loadingState, delete: true })
    const res = await fetch(`/api/profile/delete/${_id}`, {
      method: "DELETE"
    })
    const result = await res.json()
  
    if (result.message) {
      setLoadingState({ ...loadingState, delete: false })
      toast.success(result.message)
      router.refresh()
    }
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>

      </div>
      <div className={` flex gap-4 relative ${loadingState.delete || loadingState.publish ? "pointer-events-none" : ""}`}>
        <button className="active:scale-90 !bg-green-600 hover:!bg-green-700   " onClick={publishHandler}>   {loadingState.publish ? <span className="loaderBtn"></span> : "انتشار"}</button>
        {!comfirm ? <button className="active:scale-90 !bg-[#d94b4bf0] hover:!bg-[#bb3a3af0]" onClick={() => setComfirm(true)}>حذف</button> :

          <div className="flex gap-3 mr-5">
            <p className="absolute -top-3 ">ایا مطمعن به حذف اگهی هستید؟</p>
            <button className="active:scale-90 !bg-[#229dd9] hover:!bg-[#2f85af]  " onClick={deleteHandler}>
              {loadingState.delete ? <span className="loaderBtn"></span> : "بله"}
            </button>
            <button className="active:scale-90  !bg-[#8f8585] hover:!bg-[#6d6a6a]  " onClick={() => setComfirm(false)}>خیر</button>
          </div>
        }
      </div>
      <Link className="mt-10 font-semibold block text-zinc-700" href={`/admin/${_id}`}>مشاهده بیشتر ...</Link>
    </div>
  );
}

export default AdminCard;
