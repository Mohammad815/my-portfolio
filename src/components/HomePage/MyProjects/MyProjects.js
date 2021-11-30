import React, { useEffect, useState } from 'react';
import { Card, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MyProjects.css'

const MyProjects = () => {
    // const [projects, setprojects] = useState([]);
    // useEffect(() => {
    //   fetch("https://secret-everglades-79957.herokuapp.com/allProjects")
    //     .then((res) => res.json())
    //     .then((data) => setprojects(data));
    // }, []);
  //  console.log(projects)
    const [projects, setprojects] = useState([]);
    useEffect(()=>{
      fetch('./projects.json')
      .then(res=>res.json())
      .then(data=>setprojects(data))
    })
   
    return (
        <div>
      <h2 className="text-info mt-5 mb-4">Recent Projects</h2>
      <Container>
      <div className="services ">
        <div className="row container ">
          {projects?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 toy-img mb-3">
              
              <Card>
                   <Card.Img className="projectImg" variant="top" src={pd?.image} />
                        <Card.Body>
                        <h1>{pd.name}</h1>
                         
                            {/* <button  className="btn btn-info p-2 fs-5"> <a href="{pd.liveLink}" target="_blank">Live</a></button>
                            <button  className="btn btn-info p-2 fs-5"> <a href="{https://niche-projects.web.app/}" target="_blank">Live</a></button>
                            <button  className="btn btn-info p-2 fs-5"> <a href="{pd.clienSite}" target="_blank">Client</a></button>
                           
                         
                           <button  className="btn btn-info p-2 fs-5"> <a href="{pd.serverSite}" target="_blank">Server</a></button> */}
                           {/* <button> <a href="{pd.client}" target="_blank">Client Site</a></button> */}
                        
                           <Link to={``}>
                              <button className="btn btn-info p-2 fs-5">Details</button>
                            </Link>
                          
                            {/* <Link to={`/projects/${pd._id}`}>
                              <button className="btn btn-info p-2 fs-5">Order Now</button>
                            </Link> */}
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