import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faDesktop,faUsers,faCode } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Myservices.css'

const MyServices = () => {
  return (
    <div>
   
      <Container>
          <h2 className='text-center mb-3 mt-4 text-color'>My Services</h2>
          <Row className='mb-3 text-color'>
              <Col  xs={12} md={4}>
                <Card className="text-center ">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faPen} className='fs-2 mb-1 font' />
                            <h3>CREATIVE INTERFACE</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
              <Col xs={12} md={4}>
                <Card className="text-center">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faDesktop} className='fs-2 mb-1 font' />
                            <h3>USER INTERFACE</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
              <Col xs={12} md={4}>
                <Card className="text-center">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faUsers} className='fs-2 mb-1 font' />        
                            <h3>USERS EXPERIENCE</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
          </Row>
          <Row className='text-color'>
              <Col xs={12} md={4}>
                <Card className="text-center">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faPen} className='fs-2 mb-1 font' />
                            <h3>CLEAN CODE</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
              <Col xs={12} md={4}>
                <Card className="text-center">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faCode} className='fs-2 mb-1 font' />
                            <h3>FAST SUPPORT</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
              <Col xs={12} md={4} >
                <Card className="text-center ">
                        <div className='p-3 bgcolor'>
                            <FontAwesomeIcon icon={faUsers} className='fs-2 mb-1 font' />
                            <h3>REACT JS</h3>
                            <p>
                            You can relay on our amazing features list and also our customer.
                            </p>
                           
                        </div>
                       
                 </Card>
                </Col>
          
          </Row>
      </Container>
    </div>
  )
}

export default MyServices
