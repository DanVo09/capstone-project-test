import React, { useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseSideBar from './course-sidebar';
import CartContext from '../../context/cart/CartContext';
import SearchBar from '../searchBar/searchBar';
import FeedBackForm from '../feedbackForm/feedbackForm';
import CertificatinInfo from './certification-info';



export default function CourseDetail({obj}) {
    
    
    const { addCartToStorage } = useContext(CartContext)
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(async ()=> {
        let result = await fetch("http://dama.web.dmitcapstone.ca/api/all_courses");
        result =await result.json();
        setData(result);

    },[])
    
    console.log(id)
    const selectedCourse = data.filter(obj => obj.course_id === Number(id));
    return (
        <> 
        <div className="course-detail-page-wrapper">
            <SearchBar/>
            <div className='main-container'>
                <CourseSideBar/>
                
                {selectedCourse.map((item) => {
                    
                    return(
                        
                        <div key={item.id}  className="course-content">
                            <div className="course-card-img-container">
                                <img className="event-card-img" src="/assets/images/events/2.jpg" alt="#" />
                            </div>
                            <div className="course-content-detail">
                                <div className="card-content-wrapper">
                                    <h3>{item.course_name}</h3>
                                    <p>Course price: ${item.course_price}</p>
                                    <p>{item.course_description}</p>
                                    <Link to="#" id="selfStudy" onClick={ () => addCartToStorage(obj)}>Enroll</Link>
                                   
                                </div>
                            </div>
                        </div>

                    )
                })}
                 
            </div>
            <CertificatinInfo/>
            <FeedBackForm/>
        </div> 
        </>
    )
}
