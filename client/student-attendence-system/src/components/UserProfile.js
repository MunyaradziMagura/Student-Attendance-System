import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import axios from 'axios';

const UserProfile = () => {

  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    // get studentDetail
    let studentId = "62f08e36ebeeca7a0fa46cc5";
    // get studentDetail
    axios({
      method: "GET",
      url: `http://localhost:5000/api/students/detail/${studentId}`,
    }).then((res) => {
      console.log("res = ", res.data)

      setUserinfo(res.data);
    }).catch((err) => {
      console.log("err = ", err)

    })
  }, []);

  return (
    <div
      className="d-flex justify-content-around"
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <Card
        style={{
          paddingBottom: "0rem",
          backgroundColor: "#0052a0",
        }}
        bg={"info"}
      >
        <Image
          roundedCircle
          className='rounded-circle"'
          variant="top"
          src="./images/img_avatar1.png"
          style={{
            color: "white",
            padding: "1rem",
            backgroundColor: "transparent",
          }}
        />
        <Card.Body
          style={{
            color: "white",
          }}
        >
          {/* replace student with role */}
          <Card.Title>University of South Australia: Student</Card.Title>
          <ListGroup horizontal style={{ paddingTop: "1rem", width: "100%" }}>
            <ListGroup.Item>Name</ListGroup.Item>
            <ListGroup.Item style={{ width: "100%" }}>
              {userinfo.firstName} {userinfo.lastName}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal style={{ paddingTop: "1rem" }}>
            <ListGroup.Item>ID</ListGroup.Item>
            <ListGroup.Item style={{ width: "100%" }}>
              {userinfo.studentID}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal style={{ paddingTop: "1rem" }}>
            <ListGroup.Item>Program</ListGroup.Item>
            <ListGroup.Item style={{ width: "100%" }}>
            {userinfo.program}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer
          className="text-muted text-center"
          style={{ color: "#FFF" }}
        >
          Finishing on X date
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserProfile;
