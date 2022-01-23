import React from 'react';

import './Home.css'
import Axios from 'axios';
import fileDownload from 'js-file-download';
import img from '../../../images/forhad.jpg'

import MyProjects from '../MyProjects/MyProjects';
import Contact from '../../Contact/Contact';

import { Container } from 'react-bootstrap';
import Particles from "react-tsparticles";

const Home = () => {

    const stylesObj = {
        background: "02021A"
      };
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    // const bgimg= {
    //     backgroundImage: `url(${bg})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
      
    // }

    const download = (e) =>{
        e.preventDefault()
        Axios({
            url:"https://secret-everglades-79957.herokuapp.com/cv",
            method:"GET",
            responseType:"blob"
        }).then((res)=>{
            console.log(res)
            fileDownload(res.data,"downloaded.pdf")
        })
    }
    return (
        <div className='home-body'
        >
            <div  >
            <Container style={stylesObj}>
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 20,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
            <div className="row p-5" >
                 <div className="col-md-5">
                    <img className="img" src={img} alt="" />
                </div>
                <div className="col-md-7 home">
                    <div className='text-white'>
                        <h2>I`m Mohammad Forhd</h2>
                        <h4>Junior Front End Developer</h4>
                        <div style={{textAlign:'center'}}>
                            <button className="btn btn-info p-2" onClick={(e)=>download(e)}>DownLoad Resume</button>
                        </div>
                    </div>
                </div> 
            </div>
            </Container>
            </div>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;