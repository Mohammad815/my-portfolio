import React from 'react';
import './Contact.css'
import emailjs from "emailjs-com"

const Contact = () => {
    const sendEmail = e =>{
        e.preventDefault()

        emailjs.sendForm("service_rl27sb7","template_prjf2zb",e.target,"user_xry8Rc3xroXhE1qxbMEZc").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
        <div className="container border contactForm">
            <h1>Contact Form</h1>
            <form className="row form" onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name="name" className="form-control" />
                <label>Email</label>
                <input type="email" name="user_email"className="form-control" />
                <label>Message</label>
                <textarea name="message" rows="4"></textarea>
                <input type="submit" value="send" className="form-control btn btn-primary mt-5"/>
            </form>
        </div>
    );
};

export default Contact;