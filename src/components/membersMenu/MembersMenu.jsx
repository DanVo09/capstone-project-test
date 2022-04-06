import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import UserData from './User'

export default function MembersMenu({obj}) {

    const {id} = useParams();
    const user = UserData.filter(obj => obj.id === id);
    console.log(user)

    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user-info");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    return (
        <>

            {name.map((obj, user_id) => {

                return (
                    <ul key={obj.user_id} className="membersMenu">
                        <li>
                            <Link to="/dashboard" className='dashboardLink'><img src="/assets/images/users/ellenripley.webp" alt="#" className='dashboardImage' />{obj.first_name}    {obj.last_name}</Link>
                        </li>
                        {/* <li>
                            <Link to="/jobsboard">Jobs Board</Link>
                        </li> */}
                    </ul>
                )

            })}

           
        </>
    )
}
