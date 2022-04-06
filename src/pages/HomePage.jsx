import React from 'react'
import {Link} from 'react-router-dom'

// material ui icons

import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// components

import Carousel from '../components/carousel/Carousel'
import Eventcard from '../components/eventCard/EventCard';
import LogoSlideShow from '../components/logoSlideShow/logoSlideShow';

export default function HomePage() {

    return (

        <>
           
           <div className="home-page-container">
           
               <Carousel />
               <div className="homepage-wrapper">

                {/* Newsletter Section */}

                  <section>

                  </section>

                {/*Education Section Content */}

                  <section className="education-section">
                     <div className="section-header">
                         <h2>Expand Your Knowledge</h2>
                         <h3>Reliable Data Managment Practices</h3>
                         <p>DAMA Edmonton is dedicated to advancing the concepts and practices of information and data management by supporting members and their organizations to address their information and data management needs.</p>
                     </div> 

                      {/* Courses Card */}

                     <div className="course-info-card">
                         <div className="card-title-content">
                             <h2>Learn Online</h2>
                             <p>We offer online training in a variety of subjects from Data Governance and Stewardship, Data Management, Data Modeling and Design, Data Foundations, Business Intelligence &#38; Data Analytics and Information Systems Core</p>
                         </div>
                         <div className="card-sub-container">
                            <div className="icon-container">
                                <ComputerIcon className="course-icon"/>
                            </div>
                            <div className="content-container">
                                <h4>Self Directed</h4>
                                <ul>
                                    <li>Start at Any Time</li>
                                    <li>Work at your own pace</li>
                                    <li>Ideal for Experienced Data Professionals</li>
                                </ul>
                                <Link to="#">Learn More &#62;</Link>
                            </div>
                         </div>
                         <div className="card-sub-container">
                            <div className="icon-container">
                                <CastForEducationIcon className="course-icon"/>
                            </div>
                            <div className="content-container">
                                <h4>Instructor Lead</h4>
                                <ul>
                                    <li>Live Sessions</li>
                                    <li>Cohort Paced, 12 week program</li>
                                    <li>One hour weekly live discussion and Q&#38;A</li>
                                </ul>
                                <Link to="#">Learn More &#62;</Link>
                            </div>
                         </div>
                     </div>

                    {/* Enroll Card */}

                     <div className="enroll-today-card">
                         <StorageIcon className='storage-icon'/>
                         <PeopleAltIcon className='people-icon' />
                         <div className="enroll-content">
                            <h2>Enroll Today!</h2>
                            <p>Be a part of our learning community and start your journey towards becoming a Certified Professional Data Expert.</p>
                            <Link to="/courses" className='enroll-btn'>Enroll</Link>
                         </div>
                     </div>

                     {/* NAIT Card */}

                     <aside className="nait-con-ed-card">
                         <img className='nait-logo' src={process.env.PUBLIC_URL + `/assets/images/NAIT-logo.png`} alt="nait logo" />
                        <div className="nait-content">
                            <h3>Continuing Education at NAIT - DATA Science</h3>
                            <p> This program is targeted for beginners in Data Science and teaches data analysis, data visualization, data mining, and machine learning. Primarily using Python</p>
                            <a href="https://www.nait.ca/coned/data-science" target="_blank">Learn More &#62;</a>
                        </div>
                     </aside>
                  </section>

                   {/* Events Section */}

                  <section className='events-section'>
                    <div className="section-header">
                        <h2>Upcoming Events</h2>
                        <h3>Join us at one of our upcoming events</h3>
                        <p>DAMA Edmonton hosts a range of events with an opportunity to network with friends, colleagues, and industry peers. Members are entitled to exclusive <span className="highlight">member-only discounts</span>for Data Management conferences and professional development training.</p>
                    </div>
                    <div className="event-wrapper">
                        <Eventcard />
                    </div>
                  </section>
                  
                  <div className="slideshow-container">
                      <h2>Our Sponsors and partners</h2>
                      <LogoSlideShow />
                  </div>
               </div>
           </div>   
        </>
    )
}



