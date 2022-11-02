import React from "react";
import NavBar from "./navbar";
// import Sidebar from "./sidebar";

export default function Contact() {

    return (
        <>
            <NavBar />
            {/* <Sidebar /> */}
            <h1>Contact</h1>
            <div className="information">
                <h2>Have a question, comment, or concern? Don't hesitate to reach out to us. We are here to help.</h2>
                <div className="form">
                <form>
                    {/* <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <textarea type="text"></textarea>
                    </label>
                    <input type="submit" value="Submit" /> */}
                </form>
                </div>
            </div>
        </>
    )
}