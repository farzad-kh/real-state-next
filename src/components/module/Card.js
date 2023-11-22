import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import Logo from "@/public/images/home.jpg"
// import { icons } from "@/constants/icons";
import styles from "@/module/Card.module.css";
import Image from 'next/image'
function Card({ data: { _id, category, title, location, price ,description,picture} }) {
  return (
    <div className={styles.container}>
      <Image  src={Logo}
      width={500}
      height={500}
      alt="Picture of the author" />
      <div className={styles.icon}>{}</div>
      <p className={styles.title}>{title}</p>
    
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
