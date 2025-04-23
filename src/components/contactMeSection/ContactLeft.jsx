import React from "react";
import ContactForm from "./ContactForm";

function ContactLeft() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div >
        <h2 className="text-pureWhite font-bold font-special text-2xl mb-4">Get In Touch</h2>
        <p className="text-pureWhite/50">
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
          <br/>
        </p>
        <ContactForm/>
      </div>
    </div>
  );
}

export default ContactLeft;
