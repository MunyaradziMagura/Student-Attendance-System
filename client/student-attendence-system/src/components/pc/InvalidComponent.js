import { useLocation, useParams } from "react-router-dom";
import React from "react";
import Robot from '../styles/BrokenRobot.png';
export default function InvalidComponent ({}, props) {
    const location = useLocation();
    const params = useParams();
    const result  = Object.keys(params).map((int) => {return params[int]});
    const output = "The requested URL /" + result+ " was not found on this server. That's all we know";
    return(<>
        <div style={{margin:'auto'}}>
            <p style={{marginTop:'0', fontWeight:500, fontSize:'2rem', color:'#0052a0', width:'800px', lineHeight:1.5}}>{output}</p>
            <img src={Robot} style={{ Width:'55%', height:'55%', marginLeft: '10%'}} alt="logo"></img>
        </div>
    </>)
}