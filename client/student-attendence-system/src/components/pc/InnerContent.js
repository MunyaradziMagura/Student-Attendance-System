import {Outlet} from 'react-router-dom'
import sty from "../styles/Dashboard.module.css";
const  InnerContent=() =>{
  return <div className={sty.right}>
      <Outlet/>
   
  </div>;
}

export default InnerContent;