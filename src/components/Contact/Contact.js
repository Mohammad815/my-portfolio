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
        <div className="contactForm">
        <div className="container p-3 contactForm">
            <h1>Contact Form</h1>
            <form className="row form" onSubmit={sendEmail}>
                <label className="fs-2">name</label>
                <input type="text" name="name"  className="form-control p-2" />
                <label className="fs-2">Email</label>
                <input type="email" name="user_email"className="form-control p-2" />
                <label className=" fs-2">Message</label>
                <textarea name="message" rows="4"></textarea>
                <input type="submit" value="send" className="form-control  btn btn-primary fs-3 mt-5"/>
            </form>
        </div>
        </div>
    );
};

export default Contact;