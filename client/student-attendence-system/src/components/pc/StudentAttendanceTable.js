import React, { useEffect, useState } from "react";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircle,
  IoSearch,
} from "react-icons/io5";
import Table from "react-bootstrap/esm/Table";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { retrieveAttendance } from "../../utils/doRequest";
 

const StudentAttendanceTable = ({ attendanceList }) => {
  const [filterList, setFilteredList] = useState(attendanceList);
  const [selectedCourse, setCourse] = useState("");
  
  attendanceList = {
    0: {
      date: "22/08/22",
      className: "C++",
      attended: true,
      classType: "Lecture",
    },
    1: {
      date: "23/08/22",
      className: "Web Technologies",
      attended: false,
      classType: "Practical",
    },
    2: {
      date: "16/08/22",
      className: "IT Project 1",
      attended: true,
      classType: "Tutorial",
    },
    3: {
      date: "16/08/22",
      className: "Computer Science",
      attended: true,
      classType: "Tutorial",
    },
  };

  

  let uniqueCourses = new Set(); //A set that only includes unique values for courses in the attendanceList object
  let uniqueClasses = new Set(); //A set that only includes unique values for class types in the attendanceList object

  let courseList = []; //Course array used to map the courses to 'Courses' dropdown UI element
  let classList = []; //Class array used to map the courses to 'Class Type' dropdown UI element

  //Map each of the attendanceList courses to a unique set
  Object.keys(attendanceList).map((key) =>
    uniqueCourses.add(attendanceList[key].className)
  );

  //Map each of the attendanceList class types to a unique set
  Object.keys(attendanceList).map((key) =>
    uniqueClasses.add(attendanceList[key].classType)
  );

  //For each unique course value in the set, push all of into an array for mapping to 'Courses' UI element
  uniqueCourses.forEach((course) => courseList.push(course));

  //For each unique class type value in the set, push all of into an array for mapping to 'Class Type' UI element
  uniqueClasses.forEach((classType) => classList.push(classType));

  const filterByCourse = (filteredAttendance) => {
    if (!selectedCourse) {
      return filteredAttendance;
    }
    var filteredData = Object.keys(attendanceList)
      .filter((id) => attendanceList[id].className === selectedCourse)
      .reduce((obj, id) => {
        return {
          ...obj,
          [id]: attendanceList[id],
        };
      }, {});
    return filteredData;
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterByCourse(attendanceList);
    setFilteredList(filteredData);
  }, [selectedCourse]);

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        {/*Form inputs for the course type dropdown box*/}
        <Form.Label
          style={{ paddingRight: 5, paddingTop: 5, fontWeight: "bold" }}
        >
          Course:
        </Form.Label>

        <Form.Select defaultValue={"default"} onChange={handleCourseChange}>
          <option value="default" disabled>
            ---Choose Course---
          </option>
          {Object.keys(courseList).map((key) => (
            <option>{courseList[key]}</option>
          ))}
        </Form.Select>

        {/*Form inputs for the class type dropdown box*/}
        <Form.Label
          style={{ paddingRight: 5, paddingTop: 5, fontWeight: "bold" }}
        >
          Class Type:
        </Form.Label>
        <Form.Select defaultValue={"default"}>
          <option value="default" disabled>
            ---Choose Class Type---
          </option>
          {Object.keys(classList).map((key) => (
            <option>{classList[key]}</option>
          ))}
        </Form.Select>
        <Button>
          <IoSearch />
        </Button>
      </Stack>

      <Table responsive striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Date</th>
            <th>Class Name</th>
            <th>Attended</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {/*  Table data will go here. Display message if no data exists, otherwise populate with data */}

          {/* Populates the attendance table with data provided through props. If no data displays heading*/}
          {Object.keys(attendanceList).length === 0 ? (
            <tr>
              <td colSpan={3}>No Data to Display</td>
            </tr>
          ) : (
            Object.keys(attendanceList).map((key) => (
              <tr>
                <td>{attendanceList[key].date}</td>
                <td>{attendanceList[key].className}</td>
                <td>
                  {attendanceList[key].attended ? (
                    <IoCheckmarkCircleSharp />
                  ) : (
                    <IoCloseCircle />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentAttendanceTable;
