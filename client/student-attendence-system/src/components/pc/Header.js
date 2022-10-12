import React from "react";
import sty from "../styles/Dashboard.module.css";
const Header = ({pageName}) => {
    console.log(pageName);
    const Dashboard = "Dashboard > ";
    const subLink = Dashboard + pageName;
    // if(pageName === undefined){
    //     return(
    //         <div>
    //             <h1>{pageName}</h1>
    //         </div>
    //     )
    // }
    return(
        <>
            <div className={sty.rightTop}>
                <h1>{pageName}</h1>
                {pageName === 'Dashboard'?<div>Dashboard</div>: <div>{subLink}</div>}
            </div>
        </>
    )

}

export default Header;