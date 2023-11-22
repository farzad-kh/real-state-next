import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";



const layout = async ({ children }) => {

  const sessions = await getServerSession(authOptions);

  const email = sessions?.user?.email;
  if (sessions === null) redirect("/signin")
const user=await User.findOne({email:sessions.user.email})

if (!user) return <h3>مشکلی در سروز رخ داده است</h3>
  return (
    <>
      <DashboardSidebar email={email} role={user.role}>{children}</DashboardSidebar>
    </>
  );
};

export default layout;
