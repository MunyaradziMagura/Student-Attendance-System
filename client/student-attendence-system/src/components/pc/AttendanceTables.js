import React, { useState,useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TotalClassAttendanceBarChart from './TotalClassAttendanceBarChart'
function AttendanceTables({tabState, attendanceData},props) {
if (tabState.length > 0  && attendanceData.length > 0){

    // stores a set of all students ID
    const studentIDs = new Set();
    let studentAttandenceRecord = []
    // store data fro total attendance
    let classDataTemplate = {
        "name": "Total Attandance",
        "Lecture": 0,
        "Practical": 0,
        "Tutorial": 0,
        "Seminar":  0,
        "Workshop": 0,
    }
    attendanceData.forEach((e) => {
        classDataTemplate[e.classType] += e.attendies.length
        // add students to the set of students 
        studentIDs.add(e.attendies.map(e => e.toString()));
    })

    studentIDs.forEach((currentStudentId) => {
      let currentStudentAttendance = {
        "name" : currentStudentId,
        "Lecture": 0,
        "Practical": 0,
        "Tutorial": 0,
        "Seminar":  0,
        "Workshop": 0,
        "total": 0
      }
      attendanceData.forEach((i) =>{

        console.log(i.attendies)
        console.log(currentStudentId)
        if(i.attendies.includes(currentStudentId)){
          // increment that class type 
          currentStudentAttendance[i.classType] += 1
          // increment total
          currentStudentAttendance["total"] += 1
          console.log(currentStudentAttendance)
        }
      })
      
    })
    // console.log(studentAttandenceRecord)
    let classTypeTotals = [classDataTemplate]

  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Top Students" disabled={tabState.length > 0 ? false : true}>
      <p>Top student attendance TBA</p>
      </Tab>
      <Tab eventKey="profile" title="Attendance Class" disabled={tabState.length > 0 ? false : true}>
      <TotalClassAttendanceBarChart data={classTypeTotals}/>
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
          <p>Class Attendance <b>Unavalible</b>, please select a class type</p>
          </Tab>
          <Tab eventKey="longer-tab" title="Bottom Students" disabled>
          </Tab>
        </Tabs>
      )
}
}

export default AttendanceTables