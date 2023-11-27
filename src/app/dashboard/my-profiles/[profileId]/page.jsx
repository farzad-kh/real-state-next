import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";


const Edit = async ({params:{profileId}}) => {

const profile=await Profile.findOne({_id:profileId})
if (!profile)    return <h3>مشکلی پیش امده است لطفا دوباره امتحان کنید</h3>
 

    return (
        <div>
           <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
        </div>
    );
};

export default Edit;