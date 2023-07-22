import React, { useState } from "react";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const data=()=>{
        console.log(name)
        console.log(email)
        console.log(password)
    }
    return (
        
        <div className="signup">
          
            <h1>Register</h1>
            <input className="input" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name"></input>
            <input className="input" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"></input>
            <input className="input" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password"></input>
            <button className="btn-signup " onClick={data}>
               SignUp</button>
                    </div>

    )
}
export default SignUp;