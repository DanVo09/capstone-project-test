
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Register() {

    useEffect(()=>{
        if(localStorage.getItem('user-infor')){
            navigate("/aboutus")
        }
    })
    
    const [last_name,setLastName]=useState("")
    const [first_name,setFirstName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()
  

    async function signUp()
    {
        
        let item = {first_name, last_name, password, email}
        console.warn(item)

       let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/")

    }
    
    return (
        <>
          <div className="signup-form-container">
            <h1>Register A New Account</h1>
                
                <div class="form">    
                    <label for="firstname">First Name</label>
                    <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} name="firstname" />
                    <label for="lastname">Last Name</label>
                    <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} name="lastname" />
                    <label for="email">Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
                    <label for="name">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
                    <label for="type">Membership Type</label>
                    <select name="type" id="type">
                        <option value="Individual">Individual</option>
                        <option value="Student">Student</option>
                        <option value="Corporate5">Corporate - 5 Accounts</option>
                        <option value="Corporate10">Corporate - 10 Accounts</option>
                        <option value="CorporateUnlimited">Corporate - Unlimited Accounts</option>
                    </select>
                    <button onClick={signUp}>Sign Up</button>
                </div>   
          </div>
        </>
    )
}



