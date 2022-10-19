import {Outlet} from 'react-router-dom'
import sty from "../styles/Dashboard.module.css";
export default function InnerContent(){
  return <div className={sty.right}>
      <Outlet></Outlet>
  </div>;
}