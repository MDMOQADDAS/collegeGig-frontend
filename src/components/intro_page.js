import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
function IntroPage() {

    return (

        <>
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

            <div className="intropage-body">
                <div className="content">
                     <h1>Welcome to College Gig</h1>
                    <p>
                        College Gig is a revolutionary web app designed to enhance your college experience. Whether you're a student, faculty member, or administrator, our platform offers a range of features to simplify and streamline various aspects of college life.
                    </p>

                    <h2>Key Features</h2>
                    <ul>
                        <li>1. Gig Marketplace: Discover and participate in various gigs, events, and projects happening within your college community.</li>
                        <li>2. Networking Opportunities: Connect with fellow students, faculty, and professionals to expand your network and explore collaboration possibilities.</li>
                        <li>3. Resource Sharing: Access a centralized repository of study materials, lecture notes, and other educational resources shared by your peers and professors.</li>
                        <li>4. Academic Tools: Utilize handy tools such as grade calculators, class schedules, and assignment trackers to stay organized and excel in your coursework.</li>
                        <li>5. News and Announcements: Stay up to date with the latest news, events, and important announcements from your college administration.</li>
                    </ul>

                    <h2>Get Started</h2>
                    <p>
                        Join College Gig today and unlock a world of opportunities and convenience in your college journey. Sign up now and start exploring all the features we have to offer.
                    </p>
                    
                    <Button variant="contained"><Link style={{color: "white", textDecoration: "none"}}   to="/signup">SignUP </Link></Button>
                </div> 
                    
                    
            </div>

        </>
    )
}


export default IntroPage;