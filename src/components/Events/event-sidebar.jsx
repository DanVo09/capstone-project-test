import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './event-sidebar.css';


export default function EventSideBar(){


    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])

    const current = new Date();

    const upComingEventData = eventData.filter(obj=> new Date(obj.event_date)  >= current)
    const PastEventData = eventData.filter(item=> new Date(item.event_date)  < current)
 
    const [click, setClick] = useState(false);
    const toggle = index => {
        if(click === index) {
            return setClick(null)
        }

        setClick(index)
    }

    const [pastClick, setPastClick] = useState(false);
    const pastEventToggle = idx => {
        if(pastClick === idx) {
            return setPastClick(null)
        }

        setPastClick(idx)
    }
  

    return (
        <div className='sidebar'>
            <div className='upcoming-event'>
                <div className='main-title'>
                    <h2>Upcoming Events</h2>
                </div>
                         
                <>  
                {upComingEventData.map((obj, index )=> {
                    return(
                        
                        <div key={obj.event_id}  className="event-detail">

                                <div className='title'>
                                    <h3>{obj.event_title}</h3>
                                    <div onClick={() => toggle(index)} key={index}>
                                        {click === index?
                                            <RemoveIcon className="remove-icon"/>
                                        
                                            :
                                            <AddIcon className="remove-icon"/>}
                                    </div>
                                </div>
                                {click === index?
                                    <div className="topic-content">
                                        <p>Topic: {obj.event_title}</p>
                                        <p>Date: {obj.event_date}</p>
                                        <p>Type: {obj.event_type}</p>
                                        <Link to={`/events/${obj.event_id}`} >More infor</Link>
                                    </div>
                                    :
                                    null
                                } 
                        </div>

                    )
                })}
                </>
                       
            </div>

            <div  className='past-event'>
                <div className='main-title'>
                    <h2>Past events</h2>
                </div>
                <>  
                {PastEventData.map((item, idx )=> {
                    return(
                        
                        <div key={item.event_id}  className= "event-detail">

                                <div className='title'>
                                    <h3>{item.event_title}</h3>
                                    <div onClick={() => pastEventToggle(idx)} key={idx}>
                                        {pastClick === idx?
                                            <RemoveIcon className="remove-icon"/>
                                        
                                            :
                                            <AddIcon className="remove-icon"/>}
                                    </div>
                                </div>
                                {pastClick === idx?
                                    <div className="topic-content">
                                        <p>Topic: {item.event_title}</p>
                                        <p>Date: {item.event_date}</p>
                                        <p>Type: {item.event_type}</p>
                                        <Link to={`/events/${item.event_id}`} >More infor</Link>
                                    </div>
                                    :
                                    null
                                } 
                        </div>

                    )
                })}
                </>
            </div>
        </div>
    )
}