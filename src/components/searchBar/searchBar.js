import React, {useState, useEffect} from "react";
import './searchBar.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar(){

    function toggleHamburger() {

        document.querySelector('.sidebar').classList.toggle('show');
    
      }

    const [courseData, setCourseData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_courses");
        result =await result.json();
        setCourseData(result);

    },[])
    
    const [filteredData, setFilterData] = useState([]);
    const [wordEnter, setWordEnter] = useState("");
    const handleFilter = (course) => {
        const searchWord = course.target.value;
        setWordEnter(searchWord);
        const newFilter = courseData.filter((value)=>{
            return value.course_name.toLowerCase().includes(searchWord.toLowerCase());
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

            <button onClick={toggleHamburger} className="btn-toggle">Courses</button>
            <input type="text" name="search-bar" placeholder="Find a course" value={wordEnter} onChange={handleFilter}/>
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
                            <Link to={`/courses/${value.id}`}>{value.course_name}</Link> 
                        </div>
                    )
                })}
            </div>
        )}
       
        </>
    )
}