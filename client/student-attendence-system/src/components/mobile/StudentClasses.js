import React from "react";
import StudentClassCard from "./StudentClassCard";
import StudentClassList from "./StudentClassList";
// import image from '../'
function StudentClasses({ width, attendance }) {
  const varientList = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  if (width < 425) {
    //
    // if the screen is small
    return (
      <>
        {/* <StudentClassList classes={attendance} varientList={varientList} /> */}
        <StudentClassCard
          classesObject={attendance}
          varientList={varientList}
        />
      </>
    );
  } else {
    // if the screen is bigger
    return (
      <>
        <StudentClassCard
          classesObject={attendance}
          varientList={varientList}
        />
      </>
    );
  }
}

export default StudentClasses;
