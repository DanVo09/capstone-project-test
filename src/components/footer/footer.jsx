import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
    

    return (
        <>
           <footer className="footer-main">
                <div>
                    <div className="flex-footer">
                        <section>
                            <h2 >
                                <Link to="/" onClick="window.location.reload();"><img className="dama-logo" src={process.env.PUBLIC_URL + `/assets/images/dama-logo.png`} alt="" /></Link>
                            </h2>
                            <ul>   
                                    <li className="navLinks">
                                        <Link className="navItem" to="/" onClick="window.location.reload();">Home</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/about" onClick="window.location.reload();">About Us</Link>
                                    </li>
                              
                            </ul>
                        </section>

                        <section>
                            <h2>Services</h2>
                            <ul>   
                                    <li className="navLinks">
                                        <Link className="navItem" to="/memberships" onClick="window.location.reload();">Memberships</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/courses" onClick="window.location.reload();">Courses</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/events" onClick="window.location.reload();">Events</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/newsletter" onClick="window.location.reload();">News</Link>
                                    </li>
                                   
                            </ul>
                        </section>

                        <section>
                            <h2>Contact Us</h2>
                            <ul>
                            
                                    <li className="navLinks">
                                        <Link className="navItem" to="/newsletter" onClick="window.location.reload();">Phone: 780 907 8989</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/contact" onClick="window.location.reload();">Email: gmail@gmailcom</Link>
                                    </li>
                                  
                                    <li className="navLinks">
                                        <Link className="navItem" to="/contact" onClick="window.location.reload();">Address: Spartan Center - Nexen Theater,  Room Y240 second floor just East of the HP Center</Link>
                                    </li>
                                </ul>
                        </section>
                        <section>
                            <h2>Sign Up for Our Newsletter</h2>
                            <div className="SignUpForm">
                                <form action="POST" name="emailSignUp">
                                    <input type="email" required/>
                                    <input type="submit" id="submit-btn" />
                                </form>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="bottom-footer">
                    <p>
                        Copyright © 2020
                    </p>
                </div>
            </footer>
        </>
    )
}