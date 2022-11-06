import React from "react";
// import Sidebar from "./sidebar";
import NavBar from "./navbar";
import CoffeeShop from "../images/coffeeshop.jpg";
import WineTasting from "../images/winetasting.jpg";
import Coffee from "../images/coffee.jpg";
import LiveMusic from "../images/livemusic.jpg";

export default function About() {

    return (
        <>
            <NavBar />
            {/* <Sidebar /> */}
            <h1>Events</h1>
            <div className="information">
                <h2>Live music</h2>
                <img src={LiveMusic} className="service-workers" alt="people listening to live music" />
                <h2>Discounts at local coffee shop</h2>
                <img src={Coffee} className="service-workers" alt="coffee cups at a table" />
                <h2>Wine tasting at local bar</h2>
                <img src={WineTasting} className="service-workers" alt="guy with bottles of wine at a table" />
                <h2>Coffee classes at coffee training center</h2>
                <img src={CoffeeShop} className="service-workers" alt="barista making a coffee at a coffee shop" />
            </div>
        </>
    )
}