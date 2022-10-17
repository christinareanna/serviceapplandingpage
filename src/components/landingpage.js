import React from "react";
import ServiceWorkers from "../images/serviceworkers1.jpg"

export default function LandingPage() {

    return (
        <div>
            <div>
                <header className="header">
                    <h1>Service App</h1>
                    <nav>
                        <ul className="nav-list">
                            <li>About</li>
                            <li>Events</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="container">
                <img src={ServiceWorkers} className="service-workers" alt="workers" />
                <div className="text">
                    <p>An app made for those in the service industry.</p>
                </div>
            </div>
        </div>
    )
}