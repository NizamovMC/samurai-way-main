import React from 'react';
import classes from '../post/MyPost.module.css'
import Post from "./Post";

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likeCount='15'/>
                <Post message="it`s my first post" likeCount='25'/>
            </div>
        </div>
    )
}

export default MyPost;