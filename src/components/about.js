import React from "react";
// import Sidebar from "./sidebar";
import NavBar from "./navbar";

export default function About() {

    return (
        <>
            <NavBar />
            {/* <Sidebar /> */}
            <h1>About</h1>
            <div className="information">
                <h2><strong>Pause</strong> is a great way to meet other people who work in similar industries that you might not have been able to meet otherwise. <br/>
                <br/>From events, to being able to see others who work nearby you, the opportunities to build a community has never been easier.</h2>
            </div>
        </>
    )
}