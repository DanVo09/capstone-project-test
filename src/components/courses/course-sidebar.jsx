import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function CourseSideBar() {

    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_courses");
        result =await result.json();
        setData(result);

    },[])
    
    
    return(
         <div className='sidebar'>
            <h2>Courses</h2> 
            <ul>
                {data.map((obj,id) => {
                    
                    return(
                        <li key={obj.course_id}><Link to={`/courses/${obj.course_id}`} >{obj.course_name}</Link></li>
                    )
                })}
            </ul>
        </div> 
    )
}