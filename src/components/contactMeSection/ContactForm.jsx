import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_97867ej", "template_nsflknc", form.current, {
        publicKey: "c7kh6TUk8NTfFalLI",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounderd-lg bg-lightBrown px-2 "
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="E-mail"
          required
          className="h-12 rounderd-lg bg-lightBrown px-2 "
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="9"
          cols="50"
          className="rounderd-lg bg-lightBrown p-2 "
          value={message}
          onChange={handleMessage}
        />
        <button className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
