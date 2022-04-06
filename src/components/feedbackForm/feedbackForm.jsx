import React from "react";

import './feedbackForm.css';
export default function FeedBackForm() {
    

    return (
        <>
          <div className="feedbackform">
              <h2>Course Feedback (Fully Confidential)</h2>
              <p>Webinar-Course Feedback Survey</p>
              <div className="form-detail">
                  <div className="checkbox">
                      <p>How did you hear about this webinar or courses?</p>
                      <div>
                          <div>
                              <div>
                                    <input type="checkbox" name="email" value="email"/>
                                    <label htmlFor="email"> eMail</label>
                              </div>
                              <div>
                                    <input type="checkbox" name="linkedin" value="linkedin"/>
                                    <label htmlFor="linkedin">LinkedIn</label>
                              </div>
                          </div>

                           <div>
                               <div>
                                    <input type="checkbox" name="damawebsite" value="damawebsite" />
                                    <label htmlFor="damawebsite"> DAMA/ICCP Website</label>
                               </div>
                               <div>
                                    <input type="checkbox" value="other"/>
                                    <label htmlFor="other"> Other</label>
                               </div>
                               
                                
                           </div>
                            
                      </div>
                      <div>
                        <label htmlFor="other-way"> If other please specify:</label>
                        <input type="text" name="other-way"/>
                      </div>
                  </div>
                  <div>
                        <label htmlFor="instruction-preparation">Speaker/instructor preparation</label>
                        <select name="instruction-preparation" id="instruction-preparation" >
                            <option value="Exceeded Expectations">Exceeded Expectations</option>
                            <option value="Meet Expectation">Meet Expectation</option>
                            <option value="Did not Meet Expectation">Did not Meet Expectation</option>
                            <option value="other">other</option>
                        </select>
                        <div>
                            <label htmlFor="other-way"> If other please specify:</label>
                            <input type="text" name="other-way"/>
                        </div>
                  </div>
                  <div>
                        <label htmlFor="topic">What other topics/speakers would you like us to bring to you?</label>
                        <input type="text" name="topic"/>
                  </div>
                  <div>
                        <label htmlFor="course-name">Name of Webinar/course</label>
                        <input type="text" name="course-name"/>
                  </div>
                  <div>
                        <label htmlFor="course-date">Date of Webinar/Course </label>
                        <input type="date" name="course-date"/>
                  </div>
                  <div>
                        <label htmlFor="quality">Facility/Access/Quality</label>
                        <select name="quality" id="quality" >
                            <option value="Excellent">Excellent</option>
                            <option value="Meet Expectation">Meet Expectation</option>
                            <option value="Did not Meet Expectation">Did not Meet Expectation</option>
                            <option value="other">other</option>
                        </select>
                        <div>
                            <label htmlFor="other-quality"> If other please specify:</label>
                            <input type="text" name="other-quality"/>
                        </div>
                  </div>
                  <div>
                        <label htmlFor="course-content">Course Content </label>
                        <select name="course-content" id="course-content" >
                            <option value="Exceeded Expectations">Exceeded Expectations</option>
                            <option value="Meet Expectation">Meet Expectation</option>
                            <option value="Did not Meet Expectation">Did not Meet Expectation</option>
                            <option value="other">other</option>
                        </select>
                        <div>
                            <label htmlFor="other-course-content"> If other please specify:</label>
                            <input type="text" name="other-course-content"/>
                        </div>
                  </div>
                  
                  <div className="user-name">
                        <label htmlFor="name">Name (Optional)</label>
                        <div>
                            <input type="text" name="lastname" placeholder="Lastname"/>
                            <input type="text" name="firstname" placeholder="Firstname"/>
                        </div>
                        
                  </div>
                  <div>
                        <label htmlFor="email">Email (Optional)</label>
                        <input type="email" name="email"/>
                  </div>
                </div>

                  <input type="submit" name="submit" id="submit" />

              

          </div>
        </>
    )
}