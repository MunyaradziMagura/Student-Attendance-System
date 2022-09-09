import React from "react";
import StudentClassCard from "./StudentClassCard";
import StudentClassList from "./StudentClassList";
// import image from '../'
function StudentClasses({ width }) {
  let classesObject = {
    1: {
      Name: "Web Technology",
      LectureName: "Erica",
      Date: "2/2/2020",
      Location: "mawson",
    },
    2: {
      Name: "C++",
      LectureName: "michael",
      Date: "2/2/2020",
      Location: "mawson",
    },
    3: {
      Name: "Data Structures Advance",
      LectureName: "Zack",
      Date: "2/2/2020",
      Location: "mawson",
    },
    4: {
      Name: "Security Architecture",
      LectureName: "Munya",
      Date: "2/2/2020",
      Location: "mawson",
    },
    5: {
      Name: "Hello Zack",
      LectureName: "Munya",
      Date: "Now",
      Location: "city west",
    },
  };
  let classes = [
    "Web Technology",
    "C++",
    "Data Structures Advance",
    "Security Architecture",
  ];
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
        <StudentClassList classes={classes} varientList={varientList} />
      </>
    );
  } else {
    // if the screen is bigger
    return (
      <>
        <StudentClassCard
          classesObject={classesObject}
          varientList={varientList}
        />
      </>
    );
  }
}

export default StudentClasses;
