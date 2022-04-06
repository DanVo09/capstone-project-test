import React from 'react'

export default function Post() {
    

    return (
        <div className='post'>
           <img src={process.env.PUBLIC_URL + `/assets/images/events/2.jpg`} alt="" className='post-img'/>
           <div className="post-info">
               <div className="post-categories">
                   <p className="post-category">MongoDB</p>
                   <p className="post-category">Data Administration</p>
               </div>
               <h3 className="post-title">A Beginners Guide to MongoDB</h3>
               <p className="post-date">
                   1 hour ago
               </p>
           </div>
           <p className="post-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur quasi sit quia quam voluptas fugit, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur quasi sit quia quam voluptas fugit, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur quasi sit quia quam voluptas fugit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur quasi sit quia quam voluptas fugit,</p>
        </div>
    )
}
