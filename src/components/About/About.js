import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/img.png'
import bg from '../../images/bg.png'
import './About.css'
import Skill from '../Skill/Skill';

const About = () => {
    let bgimg= {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      
    }
    return (
        <div >
            <div  style={ bgimg }>
            <Container className="p-5">
                <Row className="about p-3">
                    <Col sm={12} md={8}>
                        <div className="p-3">
                        <h1>Hi! I am Mohammad Forhad</h1>
                        <h3>
                            I am a front web Developer.I have aquire the knowledge of full stack developer and acquiring knowledge day by day. I am very passionate about my work. I have some project-based experience using Html, CSS, Javascript, React JS, React Router, Express JS, Node JS, MongoDB, Firebase, Heroku, and other Technologies. I also used some CSS frameworks like Bootstrap, React Bootstrap Tailwind, and Material UI library.
                        </h3>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                            <img className="aboutImg" src={img} thumbnail alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
        <Skill></Skill>
    </div>
    );
};

export default About;