"use client"
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";
import { useSearchParams } from "next/navigation";
function Sidebar() {

  const params = useSearchParams()
  const urlParams = new URLSearchParams(params);
  const category = urlParams.get("category")
  console.log(category);
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link className={`${!category ? "font-semibold !text-[cornflowerblue]" : ""}`} href="/buy-residential">همه</Link>
      {console.log()}
      {Object.keys(categories).map((i, index) => (
        <>
          <Link className={`${category === i ? "font-semibold !text-[cornflowerblue]" : ""}`}
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            {categories[i]}

          </Link>

        </>
      ))}
    </div>
  );
}

export default Sidebar;
