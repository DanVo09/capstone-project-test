import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/cart/CartContext';
import CheckIcon from '@mui/icons-material/Check';

export default function Memberships() {
  

  return (
    <div className='memberships-container'>
        <div className="memberships-wrapper">
        <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
            rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                    <div className="header-banner">
                        <h2>Join DAMA Today!</h2>
                        <p>Register for monthy meetings through <a href="https://www.eventbrite.ca/e/dama-edmonton-monthly-meetings-payment-and-membership-options-tickets-41001259872">Eventbrite</a>.  To become a member of the Data Management Association - Edmonton.</p>
                    </div>

                </div>
        </div>
        <section className="membership-content">

            <div className="member-benefits">
                <h3>Membership Benefits</h3>
                <ul className="benefits-list">
                  <li className="benefits-item"><CheckIcon/> Networking opportunity to connect with local Information Management Professionals for sharing industry trends, problems and solutions.</li>
                  <li className="benefits-item"><CheckIcon/> Quarterly Newsletter of activities and events to members.</li>
                  <li className="benefits-item"><CheckIcon/> Professional certification through the Institute for Certification of Computer Professionals (ICCP).</li>
                  <li className="benefits-item"><CheckIcon/> Excellent platform for job seekers and hiring organizations to connect.</li>
                  <li className="benefits-item"><CheckIcon/> Publicity through chapter website for sponsoring and participating organizations. For more information contact damaedmoton@gmail.com</li>
                  <li className="benefits-item"><CheckIcon/> 20% Discount on local chapter meetings.</li>
                  <li className="benefits-item"><CheckIcon/> 10% Discount for events organized by chapter including conference registrations, workshops and networking events.</li>
                </ul>

                <div className="monthly-meetings">
                    <h3>Attend Monthly Meetings</h3>
                    <p>A small meeting fee is required to offset the cost of the meeting to cover finger food, coffee and soft drinks  <b>$12 for members including cooperating associations: IIBA, NAIT, CIPS, URISA, MRIA,; $15 non-members.</b></p>

                    <p><b>Students and unemployed</b> are encouraged to attend for a very small fee $5</p>

                    <b>Members get to attend monthly events without paying any additional monthly fees - Just bring your membership payment confirmation.</b>
                </div>
            </div>

        </section>
    </div>
  )
}
