
import "./App.css"
import Login from "./authentication/login";
import Signup from "./authentication/signup";
import IntroPage from "./components/intro_page"
import Dashboard from "./private/Dashboard";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';




function App() {
  const authToken = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
 

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/user"
          element={authToken ? <Dashboard userid={userId} /> : <Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}

export default App

