import React from 'react';
import classes from './Profile.module.css'
import MyPost from "./myPost/post/MyPost";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return <div>
    <ProfileInfo/>
    <MyPost/>
</div>
}
export default Profile;