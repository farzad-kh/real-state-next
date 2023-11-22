"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";
import Loaders from "@/loading/Loaders";

function Header() {
  const { data, status } = useSession();
  
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      {



        data ? (
          <div className={styles.login}>
            {status === "loading" ? <Loaders /> :
              <Link href="/dashboard">
                <FaUserAlt />
              </Link>
            }
          </div>
        ) : (
          <div className={styles.login}>
            {status === "loading" ? <Loaders /> :
              <Link href="/signin">
                <FiLogIn />
                <span>ورود</span>
              </Link>
            }
          </div>
        )

      }
    </header>
  );
}

export default Header;
