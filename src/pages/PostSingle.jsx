import React from 'react'
import PostsSideBar from '../components/posts/PostsSideBar'
import Singlepost from '../components/posts/SinglePost'

export default function Postsingle() {
    

    return (
        <div className='post-single-container'>
            <div className="post-single-wrapper">
                <PostsSideBar/>
                <Singlepost/>
            </div>
        </div>
    )
}
