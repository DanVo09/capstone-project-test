import React, {useState, useEffect} from 'react';
import EventData from './event-data';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function EventList(){

    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])

    console.log(eventData)
    
    const current = new Date();

    const upComingEventData = eventData.filter(obj=> new Date(obj.event_date)  >= current)

    console.log(upComingEventData)


    const [pageNumber, setPageNumber] = useState(0);

    const eventPerPage = 3
    const pagesVisited = pageNumber*eventPerPage

   
    const displayEvents = upComingEventData.slice(pagesVisited, pagesVisited + eventPerPage).map((obj) =>{
        return(                
            <div key={obj.event_id}  className="event-card">
                <div className="event-card-img-container">
                    <img className="event-card-img" src="/assets/images/events/2.jpg" alt="#" />
                </div>
                <div className="event-card-content">
                    <div className="card-content-wrapper">
                        <h2>{obj.event_title}</h2>
                        <h2>{obj.event_speaker}</h2>
                        <p>{obj.event_date}</p>
                        <p>${obj.event_price}</p>
                        <Link to={`/events/${obj.event_id}`} >Learn More/Register</Link>
                    </div>
                </div>
            </div>

        )
    });
    const pageCount = Math.ceil(upComingEventData.length / eventPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    
    return(
        <div className='event-list'>
            <h2>Upcoming Events</h2>
            <div className='event-flex'>
                {displayEvents}
            </div>
            <ReactPaginate 
                previousLable={"Previous"}
                nextLable={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                activeClassName={"paginationActive"}
                pageLinkClassName={"pageNumberBtn"}

            />
        </div>

    )
}