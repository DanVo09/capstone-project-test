
import React  from 'react'

import Posts from '../components/posts/Posts'
import PostsSideBar from '../components/posts/PostsSideBar'

export default function Newsletter() {

    
    
    return (
        <div className="news-container">
           <div className="news-wrapper">
                <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                    <div className="header-banner">
                        <h2>Newsletter</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quisquam maiores blanditiis assumenda ratione cupiditate sunt sequi in porro, asperiores eveniet facere vitae quis illum quam rem obcaecati eum! Quam.</p>
                    </div>

                </div>
                <div className="news-content">
                    <PostsSideBar/>
                    <Posts/>
                </div>
           </div>
        </div>
    )
}



