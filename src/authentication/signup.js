import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";



function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://${process.env.REACT_APP_API_URL}/api/signup`, {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json()).then((data) => {
                // localStorage.setItem("authToken", data.token);
                // console.log(data)
                if (data) navigate("/login")
                else { alert("Not Registerd. try again") }

            })
            .catch(((error) => {
                console.error("Error Loggin in : ", error)
            }))

    }

    return (
        <div>
            <div className="main-menu">
                <div>
                <Link style={{textDecoration: "none"}} to="/"><p className="app-name">CollegeGig</p></Link>
                </div>
                <div className="signup-login-box">

                    <div className="signup-section">
                        <Link className="a-signup" to="/signup">SignUP </Link>

                    </div>
                    <div className="login-section">
                        <Link className="a-login" to="/login">Login </Link>

                    </div>
                    <div className="user-dashboard">
                        <Link className="a-dashboard" to="/user">Dashboard</Link>
                    </div>
                </div>
            </div>
            <div className="signup-div">

                <div className="signupbox">
                   
                    <form onSubmit={handleSubmit}>

                       <br/>
                        <TextField
                            label="Name"
                            //id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <br /> <br/>

                       
                        <TextField
                            label="Email"
                           // id="email"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <br /> <br/>
                       
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br /><br/>
                        <Button type="submit" variant="contained" >SignUP </Button>
                        
                    </form>


                </div>
                {/* <div>
                    <Link to="/">Home</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Signup;
