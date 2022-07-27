import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import '../styles/lecturerdashboard.css'

function LecturerDashboard() {
  return (
    <div>
      <NavBar className='flex-column'>
        <Nav.Link>Your Courses</Nav.Link>
      </NavBar>
    </div>
  )
}

export default LecturerDashboard