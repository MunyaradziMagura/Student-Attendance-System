import React, { useState,useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TotalClassAttendanceBarChart from './TotalClassAttendanceBarChart'
import TotalStudentAttendanceStackedBarChart from './TotalStudentAttendanceStackedBarChart'
function AttendanceTables({tabState, attendanceData}, props) {
if (tabState.length > 0  && attendanceData.length > 0){
    
  var studentIDList = new Set()

    // store data for total attendance
    let classDataTemplate = {
        "name": "Total Attendance",
        "Lecture": 0,
        "Practical": 0,
        "Tutorial": 0,
        "Seminar":  0,
        "Workshop": 0,
    }
    attendanceData.forEach((e) => {
      // count the number of students for each class type
        classDataTemplate[e.classType] += e.attendies.length

        // add students to a set
        e.attendies.map((a) => studentIDList.add(a))
    })

    let data = [classDataTemplate]
    let rankStudents = []
    studentIDList.forEach((e) => {
      // initlise students object
      let studentObject = {
        "name": e,
        "Lecture": 0,
        "Practical": 0,
        "Tutorial": 0,
        "Seminar":  0,
        "Workshop": 0,
        "totalAttendace": function () {return this.Lecture + this.Practical + this.Tutorial + this.Seminar + this.Workshop}
    }
    // check which classes a student belongs to, then increment the corrosponding counter to the studentObject
      attendanceData.forEach((a) => {
        if(a.attendies.includes(e)){
          studentObject[a.classType] += 1
        }
      })
          // push students object
      rankStudents.push(studentObject)
    })

    // sort the ranked students
    let sortedRankedStudents = rankStudents.sort(function(a, b) {
      return a.totalAttendace() - b.totalAttendace();
    });
    console.log(sortedRankedStudents)
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Top Students" disabled={tabState.length > 0 ? false : true}>
      <TotalStudentAttendanceStackedBarChart data={rankStudents}/>
      </Tab>
      <Tab eventKey="profile" title="Attendance Class" disabled={tabState.length > 0 ? false : true}>
      <TotalClassAttendanceBarChart data={data}/>
      </Tab>
      <Tab eventKey="longer-tab" title="Bottom Students" disabled={tabState.length > 0 ? false : true}>
      <p>Bottom student attendance TBA</p>
      </Tab>
    </Tabs>
  )
}else {
    return (
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Top Students" disabled>
          </Tab>
          <Tab eventKey="profile" title="Attendance Class" disabled>
          <p>Class Attendance <b>Unavailable</b>, please select a class type</p>
          </Tab>
          <Tab eventKey="longer-tab" title="Bottom Students" disabled>
          </Tab>
        </Tabs>
      )
}
}

export default AttendanceTables