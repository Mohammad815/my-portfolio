import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/img.png'
import bg from '../../images/bg.png'
import './About.css'

const About = () => {
    let bgimg= {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      
    }
    return (
        <div>
            
            <Container className="mt-2">
                <Row className="about p-3" style={ bgimg }>
                    <Col sm={12} md={8}>
                        <div className="p-3">
                        <h1>Hi! I am Mohammad Forhad</h1>
                        <h3>
                            I am a front web Developer. I have aquire the knowledge of full stact developer and aquiring knowledge day by day. I am very passionate about my work.

                            I have some project based experiance using Html, Css, Javascript, React JS , React Router, Express JS, Node JS , MongoDB, Firebase, Heroku and other Technologies.

                            I also used some CSS framework like Bootstrap, React Bootstrap Tailwind and Material UI library.
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
    );
};

export default About;