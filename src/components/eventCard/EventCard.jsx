import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Events from './dummyData'


export default function Eventcard() {
    
    const [events, setEvents] = useState([])

    return (
        <>  
            {Events.map((obj, id) => {
                 
                return(
                    
                    <div key={obj.id}  className={obj === Events[0] ? "event-card feature" : "event-card non-feature"}>
                        <div className="event-card-img-container">
                            <img className="event-card-img" src={process.env.PUBLIC_URL + `/assets/images/${obj.eventPicture}`} alt="#" />
                        </div>
                        <div className="event-card-content">
                            <div className="card-content-wrapper">
                                <h2>{obj.eventTitle}</h2>
                                <h3>{obj.eventSpeaker}</h3>
                                <h4>{obj.eventDate}</h4>
                                <p className='event-desc'>{obj.eventDetail}</p>
                                <Link to="/events">Learn More/Register</Link>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
