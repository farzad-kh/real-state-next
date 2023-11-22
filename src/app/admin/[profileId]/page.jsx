import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

import { redirect,notFound } from "next/navigation";
const page = async ({ params: { profileId } }) => {
  await connectDB();
  const sessions = await getServerSession(authOptions);
  const user = await User.findOne({ email: sessions.user.email });

  if (user.role !== "ADMIN") notFound();



  const profile = await Profile.findOne({ _id: profileId });

  return <DetailsPage data={profile} />;
};

export default page;
