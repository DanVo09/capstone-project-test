import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import EventSideBar from './event-sidebar';
import EventSearchBar from '../searchBar/event-searchBar';
import CartContext from '../../context/cart/CartContext';
import FeedBackForm from '../feedbackForm/feedbackForm';


export default function EventDetail({obj}) {

    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])
    
    console.log(eventData)

    const {id} = useParams();
  
    const selectedEvents = eventData.filter(obj => obj.event_id === Number(id));
    
    const { addCartToStorage } = useContext(CartContext)

    return (
         
        <div className="event-detail-page-wrapper">
            <EventSearchBar/>
           
            <div className='main-container'>
                <EventSideBar/>
                
                {selectedEvents.map((obj, id) => {
                    
                    return(
                        
                        <div key={obj.event_id}  className="event-content">
                            <div className="event-card-img-container">
                                <img className="event-card-img" src="/assets/images/events/2.jpg" alt="#" />
                            </div>
                            <div className="event-content-detail">
                                <div className="card-content-wrapper">
                                    <h3>{obj.event_title}</h3>
                                    <p>Time: {obj.event_date}</p>
                                    <p>City: {obj.event_city}</p>
                                    <p>Price: ${obj.event_price}</p>
                                    <p>Type: {obj.event_type}</p>
                                    <p>{obj.event_description}</p>
                                    
                                    <Link to="#" onClick={ () => addCartToStorage(obj)}>Register</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}
               
            </div>
            <FeedBackForm/>
           
        </div> 
        
    )
}
