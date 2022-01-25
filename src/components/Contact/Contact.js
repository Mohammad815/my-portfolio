import React from 'react';
import './Contact.css'
import emailjs from "emailjs-com"
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/contact.png'
const Contact = () => {
    const sendEmail = e =>{
        e.preventDefault()

        emailjs.sendForm("service_rl27sb7","template_prjf2zb",e.target,"user_xry8Rc3xroXhE1qxbMEZc").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
    
        
        <Container className='mb-3 mt-5'>
            <h1 className='text-center text-white text-color'>Contact Me</h1>
            <Row>
                <Col  sm={12} md={6} >
                    <div className="imgs">
                        <img  src={img} alt=""/>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className=" p-3 text-white">
                       
                            <form className="row form text-color" onSubmit={sendEmail}>
                                <label className="fs-4">Name</label>
                                <input type="text" name="name"  className="form-control" />
                                <label className="fs-4">Email</label>
                                <input type="email" name="user_email"className="form-control p-2" />
                                <label className=" fs-4">Message</label>
                                <textarea name="message" rows="4"></textarea>
                                <input type="submit" value="send" className="form-control  btn btn-primary fs-4 mt-1"/>
                            </form>
                        </div>
                </Col>
            </Row>

        </Container>
     
    );
};

export default Contact;