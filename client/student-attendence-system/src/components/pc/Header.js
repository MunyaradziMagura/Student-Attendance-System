import React from "react";
import sty from "../styles/Dashboard.module.css";
const Header = ({pageName}) => {
    const Dashboard = "Dashboard > ";
    const subLink = Dashboard + pageName;

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