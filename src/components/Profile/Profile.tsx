import React from 'react';
import classes from './Profile.module.css'
import MyPost from "./myPost/post/MyPost";

const Profile = () => {
    return <div>
        <div><img src="https://theindianstreet.in/wp-content/uploads/2022/07/Hotpot.png"/>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuh6JcFny3qf5q_JW-L6mAXznVP0phQz00rA&usqp=CAU"/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            <MyPost/>
        </div>
        </div>
}
export default Profile;