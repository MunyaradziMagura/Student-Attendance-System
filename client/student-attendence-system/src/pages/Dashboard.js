import Container from 'react-bootstrap/Container';
import YourCourse from '../components/YourCourse';
import dashboarStyle from '../styles/lecturerdashboard.css';
function Dashboard() {
    return (
      <div class="YourCourseDiv">
        <Container fluid style={{paddingLeft: 35, paddingRight: 35}}>
      </Container>
      <YourCourse/>
      </div>
    );
}

export default Dashboard