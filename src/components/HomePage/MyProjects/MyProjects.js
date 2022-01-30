import React, { useEffect, useState } from 'react';
import { Card, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './MyProjects.css'

const MyProjects = () => {
   
    const [projects, setprojects] = useState([]);
    useEffect(()=>{
      fetch('./projects.json')
      .then(res=>res.json())
      .then(data=>setprojects(data))
    })
   
    return (
        <div>
      <h2 className="text-white text-color mt-5 mb-4">Recent Projects</h2>
      <Container>
      <div className="services ">
        <div className="row container ">
          {projects?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 toy-img mb-3 ">
              
              <Card className='card' data-aos="fade-up"
     data-aos-duration="3000">
                   <Card.Img className="img w-100%" variant="top" src={pd?.image} />
                        <Card.Body className='body'>
                        <h3>{pd.name}</h3>
                        <Link to={`/projects/${pd.id}`}>
                              <button className=" link">Details</button>
                          </Link>

                        {/* <div className="homebutton">
                          <div>
                          <button className="btn btn-info p-2 fs-5"><a className="link" href={pd.liveLink} target="_blank" rel="noreferrer">Live Link</a></button>
                          </div>
                          <div>
                          <button className="btn btn-info p-2 fs-5 "><a className="link" href={pd.clienSite} target="_blank" rel="noreferrer">Code Link</a></button>
                          </div>
                          
                        </div>
                            */}
                        </Card.Body>
                    </Card>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
    );
};

export default MyProjects;