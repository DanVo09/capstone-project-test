import { Data } from "@react-google-maps/api";
import React from "react";
import ProfileData from "../profile-data";
import { Link } from "react-router-dom";

export default  function Director (){
 const presidentData = ProfileData.filter(obj => obj.title === "President" || obj.title === "Past President")
 const vicePresidentData = ProfileData.filter(obj => obj.title === "Vice President")
 const ThoghtLeaderData = ProfileData.filter(obj => obj.title === "Thought Leaders")



    return(
        <>
        <section className="person-profile">
        <h2>DAMA Edmonton Board of Directors</h2>
        <div className="person-profile-flex">
            {presidentData.map((obj, id) => {
                return (
                    <div className="person-profile-details">
                    <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                        <h3>{obj.title}</h3>
                        <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
                        <h4>{obj.name}</h4>
                        <p>{obj.position}</p>
                    </Link>
                    </div>
                )
            })}
            
        </div>

        <div className="person-profile">
            <h3>Vice President</h3>
            <div className="person-profile-flex">
                {vicePresidentData.map((obj, id) => {
                    return (
                        <div className="person-profile-details">
                        <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                            <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
                            <h4>{obj.name}</h4>
                            <p>{obj.position}</p>
                        </Link>
                        </div>
                    )
                })}
            </div>
        
        </div>
    </section>
    <section className="person-profile">
        <h3>Data Management - Data Science - Thought Leaders</h3>
                
        <div className="person-profile-flex">
        {ThoghtLeaderData.map((obj, id) => {
            return (
                <div className="person-profile-details">
                    <Link className="navItem" to="/memberships" onClick="window.location.reload();">
                        <img src={process.env.PUBLIC_URL + `/assets/images/profile-picture/${obj.imageName}`} alt="images"/>
                        <h4>{obj.name}</h4>
                        <p>{obj.position}</p>
                    </Link>
                </div>
            )
        })}
        </div>
                
    </section>
    </>
    )
}