import React from "react";
import "./contactform.css";

export default function ContactForm() {

    return (
        <div class="contact-container">
            <form id="contact-form" action="" method="post">
                <h3>Have a comment, question, or concern? We're here to help.</h3>
                <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required />
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your message here." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}