import Profile from '@/models/Profile';
import DetailsPage from '@/template/DetailsPage';
import connectDB from '@/utils/connectDB';
import React from 'react';

const MoreInfo = async ({params:{profileId}}) => {
   await connectDB()
const profile=await Profile.findOne({_id:profileId})

    return <DetailsPage data={profile}/>
};

export default MoreInfo;