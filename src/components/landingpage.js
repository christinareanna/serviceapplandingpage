import React from "react";
import ServiceWorkers from "../images/serviceworkers1.jpg";
import RestaurantWorker from "../images/restaurantworker.jpg";
import { BsFillPauseCircleFill } from "react-icons/bs"
import Sidebar from "./sidebar";
export default function LandingPage() {

    return (
        <div>
            <div className="header-container">
                <header className="header">
                    <div className="logo"><BsFillPauseCircleFill size={70} />
                        <h1>PAUSE.</h1>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li>About</li>
                            <li>Events</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
                <Sidebar />
            </div>
            <div className="container">
                <img src={ServiceWorkers} className="service-workers" alt="workers" />
                <div className="text">
                    <h1>An app made for those in the service industry.</h1>
                </div>
            </div>
            <div className="container-2">
                <div className="text-2">
                    <h1>A collaborative opportunity to get to know one another, personally and professionally.</h1>
                </div>
                <img src={RestaurantWorker} className="service-workers" alt="restaurant worker" />
            </div>

            {/* Not sure whether to keep or not */}

            {/* <div className="container-3">
                <div className="text-3">
                    <h1>Calling all restaurant managers, hostesses, baristas, bartenders, servers, and anyone in between.</h1>
                    <h2>Welcome to Pause.</h2>
                </div>
            </div> */}
        </div>
    )
}
