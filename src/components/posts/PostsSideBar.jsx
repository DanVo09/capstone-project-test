import React from 'react'

export default function PostsSideBar() {
    

    return (
        <aside className='posts-sidebar'>
            <div className="sidebar-item">
                <h2 className='sidebar-title'>About the Author</h2>
                <img src={process.env.PUBLIC_URL + `/assets/images/users/1.jpeg`} alt="#" className='posts-img'/>
                <p className='author-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, temporibus. Cupiditate iusto sint inventore possimus est quia consequuntur.</p>
            </div>
            <div className="sidebar-item">
                <h2 className="sidebar-title">Categories</h2>
                <ul className="posts-sidebar-list">
                    <li className="posts-sidebar-list-item">Data</li>
                    <li className="posts-sidebar-list-item">Networking</li>
                    <li className="posts-sidebar-list-item">AI</li>
                    <li className="posts-sidebar-list-item">MySQL</li>
                    <li className="posts-sidebar-list-item">MongoDB</li>
                </ul>
            </div>
            
        </aside>
    )
}
