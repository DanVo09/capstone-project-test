import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React, {useEffect, useState}  from 'react'
import {Link, useNavigate } from 'react-router-dom';




export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
          navigate("/login")
      }
  })

  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user-info");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const userId = name.map(obj => obj.user_id)
  console.log(userId)

  const [membership, setMembershipData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_members");
        result =await result.json();
        setMembershipData(result);

    },[])

    const userMembership = membership.filter(obj => obj.user_id === 35)

    console.log(userMembership)
    
    return (
        <div className='dashboard-page'>
          <aside className='dashboard-sidebar'>
            <a href="#" className='sidebar-icon'><UploadFileIcon className="upload-icon"/><p>Upload Files</p></a>
            <a href="#" className='sidebar-icon'><BookOutlinedIcon className="courses-icon"/><p>Your Courses</p></a>
            <a href="#" className='sidebar-icon'><CalendarTodayIcon className="calendar-icon"/><p>Your Events</p></a>
            <a href="#" className='sidebar-icon'><WorkOutlineIcon className="job-icon"/><p>Job Postings</p></a>
          </aside>
          <div className='dashboard-cards'>
          <section  className='user-profile'>
            {name.map((obj, user_id) => {
                return (
                  <>
                    <div key={obj.user_id}>
                    <img src="/assets/images/users/ellenripley.webp" alt="User profile image" />
                    <h2>{obj.first_name} {obj.last_name}</h2>
                    <p>Email: {obj.email}</p>
                    </div>
                  </>
                )
              })}
              {userMembership.map((obj, user_membership_id) => {
                return (
                  < >
                  <div key={obj.ser_membership_id}>
                  <p>Membership expiry date: {obj.expiry_date}</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem autem eum aspernatur corrupti est iusto consectetur at in. Iusto consequuntur earum, sapiente distinctio accusantium commodi facere impedit expedita adipisci?</p>
                  </div>
                    
                  </>
                )
              })}
              <button>Edit Profile</button>
                  </section>
            <section className='user-courses'>
              <div>
                <h3>Your Courses and Events</h3>
                <ul>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">corem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                    <li><Link to="/#">orem ipsum dolor sit amet consectetur</Link></li>
                </ul>
              </div>
            </section>
            <section className='user-feedback'>
              <h3>You have recently completed... course</h3>
                <ul>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                    <li><Link to="/#">Completed course</Link></li>
                </ul>
              <button>Give Feedback</button>
            </section>
          </div>
        </div>
      );
}



