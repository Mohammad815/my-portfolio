import React from 'react';

import './Home.css'
import Axios from 'axios';
import fileDownload from 'js-file-download';
import img from '../../../images/forhad.jpg'

const Home = () => {
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
        <div className="">
            <div className="container">
            <div className="row mt-5">
                 <div className="col-md-5">
                    <img className="img" src={img} alt="" />
                </div>
                <div className="col-md-7">
                    <h2>I`m Mohammad Forhd</h2>
                    <h4>Junior Front End Developer</h4>
                    <p>This is Forhad.I Comoleted my graduation from east Delta university.Computer Science graduated passionate about MERN stack learning. Proficient in a range of   modern technologies including HTML, CSS3, JavaScript Plus modern libraries and frameworks.</p>
                    <div style={{textAlign:'center'}}>
                    <button className="btn btn-info p-3" onClick={(e)=>download(e)}>DownLoad Resume</button>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default Home;