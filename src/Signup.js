import axios from "axios";
import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate , Link } from "react-router-dom";


function Signup() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
        }
        catch(e){
            console.log(e);

        }    
    }



    return(
       <div>
          <h1>Signup</h1>
          <form action="POST">
               <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />
               <input type="submit" onClick={submit}/>

          </form>

           <br/>
           <p>OR</p>
           <br/>
           <Link to="/">Login</Link>
       </div>
    )
}

export default Signup;