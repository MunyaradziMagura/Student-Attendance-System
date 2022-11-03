import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import sty from "../styles/Dashboard.module.css"; 
import Nav from "react-bootstrap/Nav";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import horizontalLogo from '../styles/logo_unisa_horizontal.png';
import defaultAvater from '../styles/avatar-default.jpg';
export default function SideNavigation (props) {
    var userData = { userName: localStorage.getItem("name") };
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    var calendarDate = `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`
    localStorage.setItem("calendarDate", calendarDate) // set calendar date to local storage 
    console.log(localStorage);
    const doLogout = () => {
      localStorage.clear();
      navigate("/Login");
    };
    const[windowSize, setWindowSize] = useState("100vh");
    const handleResize = ()=>{
      if(window.innerHeight<=701){
        setWindowSize(window.innerHeight+250);
      }else{
        setWindowSize("100vh");
      }
    };
    useEffect(() => {
      //This section will automatically resize of the sideNavigation every time the page is moving to the next page or reload
      if(window.innerHeight<=701){
        setWindowSize(window.innerHeight+250);
      }else{
        setWindowSize("100vh");
      }
      //This section will automactically resize of the sideNagivation every the browser detect a resize of devices resolution
      window.addEventListener("resize", handleResize);
    }, [windowSize])

    

    return(<>
          <div className={sty.left} style={{position:'sticky', top:0, height:windowSize, borderRight: '1px solid #555962' }}>
            <div style={{width:430, height:112, backgroundColor:'#0052A0'}}>
              <img src={horizontalLogo} style={{maxWidth:'85%', height:'85%', backgroundColor:'#0052A0', paddingLeft:50, paddingTop:15}} alt="logo"></img>
            </div>
            <div style={{height:300, backgroundColor:'#fff', borderBottom: '1px solid #34393F'}}>
              <h2 className={sty.helloSideNav}>Welcome {userData.userName}</h2>
              <img src={defaultAvater} style={{ Width:'55%', height:'55%', marginLeft:130, marginTop:10,borderRadius:'5px'}} alt="logo"></img>
              <ul className={sty.inlineList}>
                <li>
                  <strong style={{fontWeight:600, verticalAlign:'baseline', wordWrap:'break-word'}}>Email: </strong>
                  <a style={{color:'#0052A0'}}>{localStorage.email}</a>
                </li>
              </ul>
            </div>
            <div>
              <Nav >
                <Nav.Link
                  style={{color:'black'}}
                  className={sty.navItem}
                  href="/Dashboard/Courses"
                > Courses
                </Nav.Link>
              </Nav>
              <div className = {sty.calendar}>
                <Calendar onChange={onChange} value={value}/>
              </div>
            </div>
            <div className = {sty.btn}>
              <Button style={{width:'200px'}} variant="primary" onClick={doLogout}>
                Logout
              </Button>
            </div>
          </div>
      </>)
}