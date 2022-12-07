

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import './contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wgqu5kj",
        "template_mdew9c7",
        form.current,
        "Bk6aRS3QwwN2EMBlC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'black',
            title: ' Your message was sent successfully.',
            showConfirmButton: false,
            timer: 3500, 
            width: 500,
            padding: '10px',
            color: 'black'
           
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
        <form ref={form} onSubmit={sendEmail} className="login-form">
        <h2 className="heading">Contact Us</h2>
          <div className="inputBox">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
        <div className="inputBox">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="inputBox">
          <label>Message</label>
          <textarea name="message" />
        </div>
      <div className="inputBox">
        <input type="submit" value="Send" />
      </div>
      </form>
    </div>

  );
};

export default Contact;
