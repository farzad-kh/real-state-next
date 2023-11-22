"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/module/LogoutButton.module.css";

const LogoutButton = () => {
  return (
    <div>
      <button className={styles.button} onClick={()=>signOut({ callbackUrl: 'http://localhost:3000/' })}>
        <FiLogOut />
        خروج
      </button>
    </div>
  );
};

export default LogoutButton;
