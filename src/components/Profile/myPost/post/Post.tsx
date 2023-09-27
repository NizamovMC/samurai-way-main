import React from 'react';
import classes from '../post/Post.module.css'
import {PostDataTypeProps} from "./MyPost";

// export type MessagePropsType = {
//     id?: number
//     message: string,
//     likeCount: number
// }
const Post = (props: PostDataTypeProps) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkPIBODjpIoNx3idy4UoPtyNVm5YFrK2gdQ&usqp=CAU"
                alt="image"/>
            {props.message}
            <div>
                <span className={classes.like}>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;