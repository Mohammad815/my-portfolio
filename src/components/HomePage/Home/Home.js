import React from 'react';

import './Home.css'
import Axios from 'axios';
import fileDownload from 'js-file-download';

const Home = () => {
    const download = (e) =>{
        e.preventDefault()
        Axios({
            url:"http://localhost:4000",
            method:"GET",
            responseType:"blob"
        }).then((res)=>{
            console.log(res)
            fileDownload(res.data,"downloaded.pdf")
        })
    }
    return (
        <div>
            
            <h1>this is home</h1>
            <div style={{textAlign:'center'}}>
            <button onClick={(e)=>download(e)}>DownLoad CV</button>
            </div>
        </div>
    );
};

export default Home;