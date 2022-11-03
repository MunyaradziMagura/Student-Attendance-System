import React from "react";
import sty from "../styles/Dashboard.module.css";
export default function Header ({pageName}, props) {
    const Dashboard = "Dashboard > ";
    const subLink = Dashboard + pageName;
    return(
        <>
            <div className={sty.rightTop} style={{height:112}}>
                <h1 style={{color:'white'}}>{pageName}</h1>
                {pageName === 'Dashboard'?<div style={{color:'#98c0e6'}}>Dashboard</div>: <div>{subLink}</div>}
            </div>
        </>
    )

}