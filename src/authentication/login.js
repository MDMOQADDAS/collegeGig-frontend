import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();



        fetch("http://localhost:3001/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json()).then((data) => {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("username", data.name);
                //console.log(data.userId)
                if (data.token) { navigate("/user") }
                else { alert("Email Or Password Wrong...") }



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
            <div className="login-div">

                <div className="loginbox">
                    
                    <form onSubmit={handleSubmit}>
                      <br/>
                        <TextField
                            label="Email"
                           // id="email"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <br />
                       <br/>
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br /><br/>
                        <Button variant="contained" type="submit">Login</Button>
                    </form>


                </div>

                {/* <div>
                    <Link to="/">Home</Link>
                </div> */}

            </div>
        </div>
    )
}

export default Login;
