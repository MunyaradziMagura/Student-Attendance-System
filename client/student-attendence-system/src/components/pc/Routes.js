import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import InnerContent from "./InnerContent"
import Home from "./Home"
import Header from "./Header"
import YourCourse from "./YourCourse"

const MainRoutes = () =>{
    <Routes>
        <Route path="/" element={<InnerContent/>}>
            {console.log("I'm here")}
            <Route path="/" element={<Navigate replace to="home"/>}/>
            <Route path="Home" element={<Header pageName={"Dashboard"}/>}/>
        </Route>
    </Routes>
}

export default MainRoutes;