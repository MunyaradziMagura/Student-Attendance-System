import React, { useState,useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TotalClassAttendanceBarChart from './TotalClassAttendanceBarChart'
function AttendanceTables({tabState, attendanceData},props) {
if (tabState.length > 0  && attendanceData.length > 0){
    console.log(attendanceData)

    // store data fro total attendance
    let classDataTemplate = {
        "name": "Total Attandance",
        "Lecture": 10,
        "Practical": 20,
        "Tutorial": 30,
        "Seminar":  40,
        "Workshop": 50,
    }
    attendanceData.forEach((e) => {
        classDataTemplate[e.classType] += e.attendies.length
        console.log(e.classType)
        console.log(e.attendies.length)
        // clear classDataTemplate
    })
    let data = [classDataTemplate]

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
          <p>Class Attendance <b>Unavalible</b>, please select a class type</p>
          </Tab>
          <Tab eventKey="longer-tab" title="Bottom Students" disabled>
          </Tab>
        </Tabs>
      )
}
}

export default AttendanceTables