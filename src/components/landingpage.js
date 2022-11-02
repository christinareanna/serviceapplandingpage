import React from "react";
import ServiceWorkers from "../images/serviceworkers1.jpg";
import RestaurantWorker from "../images/restaurantworker.jpg";
import NavBar from "./navbar";

export default function LandingPage() {

    return (
        <div>
            <NavBar />
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
