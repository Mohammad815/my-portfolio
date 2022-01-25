import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css'

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails]= useState([])
    const [singleProject, setSingleProject]=useState({})
    useEffect(()=>{
      fetch('/projectDetails.json')
      .then(res=>res.json())
      .then(data=>setProjectDetails(data))
    },[])

    useEffect(()=>{
      const foundProject = projectDetails.find(project => project.id == projectId)
      setSingleProject(foundProject)
    },[projectDetails,projectId])
    
  return (
  
     <Container className='mt-5'>
      <Row>
        <Col sm={12} md={6}>
          <img className="img" src={singleProject?.image} alt="" />
        </Col>
        <Col sm={12} md={6} >
          <div>
            <h3>Project Details : {singleProject?.name}</h3>
            <p>Project Name : {singleProject?.details}</p>
           
            <button className="btn btn-info p-2 me-3 fs-5"><a className="link" href={singleProject?.liveLink} target="_blank" rel="noreferrer">Live Link</a></button>
  
           
            <button className="btn btn-info p-2 fs-5 "><a className="link" href={singleProject?.clienSite} target="_blank" rel="noreferrer">Code Link</a></button>
     
          
          </div>
        </Col>
      </Row>
  </Container>
    
  )
}

export default ProjectDetails
