import React from 'react';

import './Home.css'
import Axios from 'axios';
import fileDownload from 'js-file-download';
import img from '../../../images/forhad.jpg'
import MyProjects from '../MyProjects/MyProjects';
import Contact from '../../Contact/Contact';
import bg from '../../../images/bg.png'
import { Container } from 'react-bootstrap';

const Home = () => {

    const bgimg= {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      
    }

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
        <div >
            <div style={ bgimg } >
            <Container>
            <div className="row p-5" >
                 <div className="col-md-5">
                    <img className="img" src={img} alt="" />
                </div>
                <div className="col-md-7 home">
                    <div>
                    <h2>I`m Mohammad Forhd</h2>
                    <h4>Junior Front End Developer</h4>
                    <div style={{textAlign:'center'}}>
                    <button className="btn btn-info p-3" onClick={(e)=>download(e)}>DownLoad Resume</button>
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