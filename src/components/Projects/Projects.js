import React from 'react'
import './Projects.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img1 from '../../images/project1.png'
// import img2 from '../../images/project2.com.png'
// import img3 from '../../images/project3.png'


const Projects = () => {
  return (
    <Container className='mb-4 skil-bg'>
        <Row className="g-4">
            <Col xs={6} md={4}>
            <Card className='card'>
                <Card.Img className='img' variant="top" src={img1} />
                <Card.Body className='body'>
                    <h3>Card title</h3>
                    <p>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </p>
                    <a href="#">Read More</a>
                </Card.Body>
            </Card>
           </Col>
        </Row>
    </Container>
  )
}

export default Projects

