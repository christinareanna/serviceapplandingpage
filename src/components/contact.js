import React from "react";
import NavBar from "./navbar";
import ContactForm from "./contactform";
// import Sidebar from "./sidebar";

export default function Contact() {

    return (
        <>
            <NavBar />
            {/* <Sidebar /> */}
            <h1>Contact</h1>
            <div className="information">
                <div className="form">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}