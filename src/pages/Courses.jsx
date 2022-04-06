import React from 'react';
import { Link } from 'react-router-dom';

/*
import axios from 'axios';

class Courses extends React.Component {
  // State of your application
  state = {
    courses: [],
    error: null,
  };

  // Fetch your courses immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/courses');
      this.setState({ courses: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, course } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="Courses">
        <ul>
          {this.state.courses.map(course => (
            <li key={course.id}>{course.attributes.name}: {course.attributes.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Courses;
*/


import FeedBackForm from '../components/feedbackForm/feedbackForm';
import CourseSideBar from '../components/courses/course-sidebar';
import CertificatinInfo from '../components/courses/certification-info';
import ComputerIcon from '@mui/icons-material/Computer';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CheckIcon from '@mui/icons-material/Check';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchBar from '../components/searchBar/searchBar';


export default function Course() {
  

    return (
      
        <>
        <div className="course-page-wrapper">
          <div className='course-banner' style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
            <h1>TRAINING, EDUCATION, CERTIFICATION</h1>
          </div>
         <SearchBar/>
          <div className='main-container'>
           <CourseSideBar />

            <div className='content-detail'>
              <div className='content-detail-flex'>

                  <div className='course-card self-study'>
                    <div className='icon'>
                      <ComputerIcon className='title-icons'/>
                    </div>
                    <div className='course-card-content'>
                      <h2>Self Study Courses</h2>
                      <ul>
                          <li><CheckIcon className='check-icon'/>$595</li>
                          <li><CheckIcon className='check-icon'/>Start at Any Time</li>
                          <li><CheckIcon className='check-icon'/>Work at your own pace</li>
                          <li><CheckIcon className='check-icon'/>Ideal for Experienced Data Professionals</li>
                      </ul>
                      <Link to="#">Learn More &#62;</Link>
                    </div>
                  
                  </div>

                  <div className='course-card instuctor-led'>
                    <div className='icon'>
                      <CastForEducationIcon className='title-icons'/>
                    </div>
                    <div className='course-card-content'>
                        <h2>Instrutor-Led, Group Study-paced Learning</h2>
                      
                      <ul>
                        <li><CheckIcon className='check-icon'/>$1295</li>
                        <li><CheckIcon className='check-icon'/>Live Sessions </li>
                        <li><CheckIcon className='check-icon'/>Cohort Paced, 12 week program</li>
                        <li><CheckIcon className='check-icon'/>One hour weekly live discussion and Q&#38;A</li>
                      </ul>
                      <a href="#">Learn More &#62;</a>
                    </div>
                  </div>
              </div>
              <div className='note'>
                <div className='icon-container'>
                  <AppRegistrationIcon className='note-icon'/>
                 
                </div>
                <div className='note-content'>
                 <p>
                  To register for the Online course or self study program: purchase the course from the DAMA Edmonton Store and you will receive an email with the website, user name and password within 48 hours of payment.
                  </p>
                </div>
              </div>
         
            </div>

          </div>

          <CertificatinInfo/>
        </div>

        <div className='feedback'>
          <FeedBackForm/>
        </div>
        </>
    )
}



