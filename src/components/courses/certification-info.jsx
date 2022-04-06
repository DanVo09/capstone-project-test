import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


export default  function CertificatinInfo (){
    return (
        <div className='certification-content'>
            <h2>Certification Examinations</h2>
          
              <ul>
                <li><a href="tel:"><CallIcon className='call-icon'/><p>1.800.843.8227</p> </a> to schedule a date and time to take the Data Governance and Stewardship Professional examination or </li>
                <li><a href="mailto:"><EmailIcon className='email-icon'/> <p>damaedmonton@gmail.com</p> </a> with your preferred dates for an online proctored examination. </li>
              </ul>
          </div>
    )
}