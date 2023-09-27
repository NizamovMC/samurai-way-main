import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div >
            <div><img src="https://theindianstreet.in/wp-content/uploads/2022/07/Hotpot.png"/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuh6JcFny3qf5q_JW-L6mAXznVP0phQz00rA&usqp=CAU"/>
                </div>
                ava + description
            </div>
        </div>

    )
}
export default ProfileInfo;