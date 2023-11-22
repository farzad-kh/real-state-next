

import { CgProfile } from "react-icons/cg";
// import LogoutButton from "@/module/LogoutButton";
import styles from "@/layout/DashboardSidebar.module.css";
import LogoutButton from "@/module/LogoutButton";

import RouterLayout from "./RouterLayout";

async function DashboardSidebar({ children, email, role }) {



  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" && <div className="mt-1 font-semibold">ادمین</div>}
        <p>{email}</p>
        <span></span>

        <RouterLayout role={role} />
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
