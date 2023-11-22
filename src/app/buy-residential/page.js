import Profile from "@/models/Profile";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";



async function buyResidential({ searchParams }) {

    // const res = await fetch(`http://localhost:3000/api/profile`, {
    //     cache: "no-store"
    // })

    const data = []
    // const profiles = await Profile.find().select("-userId");


    const publish = data?.data?.filter(item => item.published === true)
    const filterData = publish.filter(item => item.category === searchParams?.category)


    if (data.error) return <h3>مشکلی پیش امده است</h3>
    return (
        <div>

            <BuyResidentialsPage data={

                searchParams.category ? filterData : publish

            } />
        </div>
    );
};

export default buyResidential;