import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from 'react-icons/fa';


const Sidebar = () => {
    const [isSidebarShowing, setIsSidebarShowing] = useState(false)
    const toggle = () => setIsSidebarShowing(!isSidebarShowing)


    function NavIcon() {
        return isSidebarShowing ? (
            <div className="close-container">
                <button className="close" onClick={toggle}>
                    <FaWindowClose size={30} />
                </button>
            </div>
        ) : (
            <div className="bars-container">
                <button className="bars" onClick={toggle}>
                    <FaBars size={30} />
                </button>
            </div>
        )
    }


    function Menu() {
        return isSidebarShowing ? (
            <div className="sidebar-container">
                <div>
                    <div aria-label="About" id="about">
                        <Link to="/about" className="about-button" onClick={toggle}>About</Link>
                    </div>
                    <div aria-label="Events" id="events">
                        <Link to="/events" className="events-button" onClick={toggle}>Events</Link>
                    </div>
                    <div aria-label="Contact" id="contact">
                        <Link to="/contact" className="contact-button" onClick={toggle}>Contact</Link>
                    </div>
                    <Link to="/login" className="login" onClick={toggle}><button className="login">Log in</button></Link>
                </div>
            </div>
        ) : null
    }

    return (
        <div>
            <NavIcon />
            <Menu />
        </div>
    );
};

export default Sidebar;
