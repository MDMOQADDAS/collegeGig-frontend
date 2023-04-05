import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';



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
                //console.log(data.userId)
                if (data.token) { navigate("/user") }
                else { alert("Email Or Password Wrong...") }
                


            })
            .catch(((error) => {
                console.error("Error Loggin in : ", error)
            }))

    }

    return (
        <div className="login-div">

            <div className="loginbox">
                <p>Login</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />
                    <button type="submit">Login</button>
                </form>


            </div>

            <div>
                <Link to="/">Home</Link>
            </div>

        </div>
    )
}

export default Login;
