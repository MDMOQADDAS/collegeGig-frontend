import {  Link } from "react-router-dom"

function IntroPage() {

    return (
        
        <>
            <div className="signup-login-box">
                <h3>Welcome to the project</h3>
                <div className="signup-section">
                    <Link to="/signup">SignUP Section </Link>
                </div>
                <div className="login-section">
                    <Link to="/login">Login Section</Link>

                </div>
            </div>
        </>
    )
}


export default IntroPage;