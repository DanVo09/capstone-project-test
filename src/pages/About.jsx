import React from 'react';
import {Link} from 'react-router-dom';
import LogoSlideShow from '../components/logoSlideShow/logoSlideShow';
import GoalMission from '../components/about-components/GoalMission/GoalMission';
import Director from '../components/about-components/Directors/Director';


export default function Aboutus() {
    

    return (
      
        <>
          <div className="about-page-wrapper">
            <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") top/cover no-repeat` }}>
                    <div className="about-title">
                        <h2>Edmonton Data management Association</h2>
                        <p>Business Analytics, Data Analytics, Internet of Things Analytics, Data Science, Data Management, Data Governance, Data Operations and Security, Data Stewardship, Data Modeling.</p>
                        <Link className="navItem" to="/contact" onClick="window.location.reload();">Request information via Email</Link>  
                    </div>
                    <div className="MissonGoal">
                        <GoalMission/>
                    </div>

            </div> 
                
            <Director/>
            <section className="sponsors-section">
                <h2>Partners and Sponsors</h2>
                <div className="logo-flex">
                <LogoSlideShow/> 
                </div>
            </section>
          </div>
        </>
    )
}



