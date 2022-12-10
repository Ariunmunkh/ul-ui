import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import UserListPage from './components/pages/user/UserListPage'
import UserPage from './components/pages/user/UserPage'

import './App.css'

export default function App() {


    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/userlistpage" element={<UserListPage />} />
                    <Route path="/userpage/:userid" element={<UserPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={FooterStyle}>Designed & coded by <a href="http://ontslog.com/" target="_blank" rel="noopener noreferrer">Ontslog</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}