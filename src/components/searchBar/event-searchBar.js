import React, {useState, useEffect} from "react";
import './searchBar.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function EventSearchBar(){

    function toggleHamburger() {

        document.querySelector('.sidebar').classList.toggle('show');
    
      }

    const [eventData, setEventData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_events");
        result =await result.json();
        setEventData(result);

    },[])
    
    const [filteredData, setFilterData] = useState([]);
    const [wordEnter, setWordEnter] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEnter(searchWord);
        const newFilter = eventData.filter((value)=>{
            return value.event_title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord===""){
            setFilterData([]);
        }else {
            setFilterData(newFilter);
        }
       
    };

    const CloseInput = () => {
        setFilterData([]);
        setWordEnter("");
    }


    return(
        <>
        <div className='search-form'>

            <button onClick={toggleHamburger} className="btn-toggle">Events</button>
            <input type="text" name="search-bar" placeholder="Find an event" value={wordEnter} onChange={handleFilter}/>
            {filteredData.length === 0 
                ? 
                <SearchIcon className="search-icon"/> 
                : 
                <CloseIcon className="search-icon" id="close-button" onClick={CloseInput}/>
            }
            
        </div>
        {filteredData.length !=0 &&(
             <div className="dataResult">

                {filteredData.slice(0,10).map((value,id)=>{
                    return(
                        <div>
                            <Link to={`/events/${value.event_id}`}>{value.event_title}</Link> 
                        </div>
                    )
                })}
            </div>
        )}
       
        </>
    )
}