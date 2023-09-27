import React, {FC} from 'react';
import classes from '../post/MyPost.module.css'
import Post from "./Post";

export type PostDataTypeProps = {
    id?: number,
    message?: string,
    likeCount?: number
}
const MyPost: FC<PostDataTypeProps> = (props) => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'it`s my first post', likeCount: 25},
    ]
    let postDataElements = postData.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postDataElements}
            </div>
        </div>
    )
}

export default MyPost;