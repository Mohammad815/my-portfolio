import React from 'react'

import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.png'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import { Col, Container, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <div>
      <h1>Professional Skills</h1>
      <Container>
            <Row>
                <Col sm={8} xs={12} md={8}>
                    <div>
                    <img  src={img1} alt=""/>
                    </div>
                    <div>
                    <img  src={img2} alt=""/>
                    </div>
                    <div>
                    <img  src={img3} alt=""/>
                    </div>
                </Col>
                
            </Row>
            <Row>
                <Col sm={8} xs={12} md={8}>sm=true</Col>
            </Row>
</Container>
    </div>
  )
}

export default Skill
