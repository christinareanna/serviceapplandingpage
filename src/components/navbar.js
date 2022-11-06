import React from "react";
import { BsFillPauseCircleFill } from "react-icons/bs"
import Sidebar from "./sidebar";
import { Link, useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <header className="header">
                <div className="logo" onClick={() => navigate('/')}><BsFillPauseCircleFill size={70} />
                    <h1 onClick={() => navigate('/')}>PAUSE.</h1>
                </div>
                <nav>
                    <ul className="nav-list">
                        <Link to="/about" className="about">About</Link>
                        <Link to="/events" className="events">Events</Link>
                        <Link to="/contact" className="contact">Contact</Link>
                        <Link to="/login" className="login"><button className="login">Login</button></Link>
                    </ul>
                </nav>
            </header>
            <Sidebar />
        </div>
    )
}