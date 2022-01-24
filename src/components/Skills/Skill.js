import React from 'react'
import './Skills.css'

import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.jpg'
import img10 from '../../images/22.png'
import img11 from '../../images/23.png'
import img12 from '../../images/24.png'
import img13 from '../../images/25.png'
import img14 from '../../images/26.png'

import { Col, Container, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <div className='skil-bg'>
      <h1 className='text-white'>Professional Skills</h1>
      <Container>
            <Row>
                <Col sm={8} xs={12} md={12} className='skill text-white'>
                   
                      <div>
                      <img  src={img1} alt=""/>
                      <p>HTML</p>
                      </div>
                      <div>
                      <img  src={img2} alt=""/>
                      <p>CSS</p>
                      </div>
                      <div>
                      <img  src={img3} alt=""/>
                      <p>Javascript</p>
                      </div>  
                      <div>
                      <img  src={img4} alt=""/>
                      <p>ReactJs</p>
                      </div>  
                      <div>
                      <img  src={img5} alt=""/>
                      <p>Bootstrap</p>
                      </div>  
                      <div>
                      <img  src={img6} alt=""/>
                      <p>React Bootstrap</p>
                      </div>  
                      <div>
                      <img  src={img7} alt=""/>
                      <p>Material UI</p>
                      </div>  
                      <div>
                      <img  src={img8} alt=""/>
                      <p>NodeJs</p>
                      </div>  
                      <div>
                      <img  src={img9} alt=""/>
                      <p>MongoDB</p>
                      </div>   
                      <div>
                      <img  src={img10} alt=""/>
                      <p>GitHub</p>
                      </div>   
                      <div>
                      <img  src={img11} alt=""/>
                      <p>Visual Studio Code</p>
                      </div>   
                      <div>
                      <img  src={img12} alt=""/>
                      <p>Heroku</p>
                      </div>   
                      <div>
                      <img  src={img13} alt=""/>
                      <p>Firebase</p>
                      </div>   
                      <div>
                      <img  src={img14} alt=""/>
                      <p>Firebase</p>
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
