import Profile from "@/models/Profile";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import connectDB from "@/utils/connectDB";



async function buyResidential({ searchParams }) {

    // const res = await fetch(`http://localhost:3000/api/profile`, {
    //     cache: "no-store"
    // })
    connectDB()
    const profiles = await Profile?.find()?.select("-userId");
    const data = profiles


    const publish = data?.filter(item => item.published === true)
    const filterData = publish?.filter(item => item.category === searchParams?.category)


    
    return (
        <div>

            <BuyResidentialsPage data={

                searchParams.category !== undefined ? filterData : publish

            } />
        </div>
    );
};

export default buyResidential;