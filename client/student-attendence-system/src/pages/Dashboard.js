//import StudentAttendanceTable from "../components/pc/StudentAttendanceTable";
//import StudentSearchProfile from "../components/StudentSearchProfile";
//import YourCourse from '../components/YourCourse';
import MainDash from "../components/pc/Dashboard";
import sty from "../components/styles/Dashboard.module.css" 
import SideNavigation from "../components/pc/sideNavigation";
import MainRoutes from "../components/pc/Routes"
function Dashboard() {
  return (
    <>
      {/* <MainDash /> */}
      <div className={sty.box}>
        <SideNavigation></SideNavigation>
        <MainRoutes></MainRoutes>
      </div>
    </>
  );
}

export default Dashboard;
