import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';



function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const  navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/api/signup", {
            method: "POST",
            body: JSON.stringify({name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( (response)=> response.json() ).then( (data)=>{
           // localStorage.setItem("authToken", data.token);
           // console.log(data)
            if(data) navigate("/login")
            else{alert("Not Registerd. try again")}
          
        } )
        .catch( ( (error)=>{
            console.error("Error Loggin in : ", error)
        }) )

    }

    return (
        <div className="signup-div">
           
                <div className="signupbox">
                    <h3>Signup</h3>
                    <form onSubmit={handleSubmit}>

                    <label htmlFor="password">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <br/>

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <br/>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br/>
                        <button type="submit">Signup</button>
                    </form>

                   
                </div>
                <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Signup;
