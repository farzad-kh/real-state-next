import DashboardSidebar from "@/layout/DashboardSidebar";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Profile from "@/models/Profile";
import AdminCard from "@/module/AdminCard";
import styles from "@/template/BuyResidentialsPage.module.css";
const page = async () => {
  connectDB();
  const sessions = await getServerSession(authOptions);
  const user = await User.findOne({ email: sessions.user.email });
  if (!sessions) redirect("/signin");
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profile = await Profile.find({ published: false });

  // const profile2 = await Profile.find({ published: false }).updateOne({published: true});

  const profileInfo = JSON.parse(JSON.stringify(profile));

  return (
    <DashboardSidebar email={user.email} role={user.role}>
        { !profileInfo.length && <p className={styles.text}>هیچ اگهی در انتظار نیست</p>}
      {profileInfo?.map((item) => (
        <AdminCard data={item} key={item?._id}  />
      ))}
    </DashboardSidebar>
  );
};

export default page;
