import React from "react";
// import Sidebar from "./sidebar";
import NavBar from "./navbar";
import Communicate from "../images/communicating.jpg";

export default function About() {

    return (
        <>
            <NavBar />
            {/* <Sidebar /> */}
            <h1>About</h1>
            <div className="about-info">
                <img src={Communicate} className="people-talking" alt="communicating" />
                <p><strong>Pause</strong> is a great way to meet other people who work in similar industries that you might not have been able to meet otherwise.
                    From events, to being able to see others who work nearby you, the opportunities to build a community are simple with Pause.</p>
            </div>
            <div>
            </div>
        </>
    )
}