import service from "../../src/utils/request";

/**
 * for  login request
 */

export function userLogin(data) {
  return service.request({
    url: `/${data.role}/Login`,
    method: "POST",
    data,
  });
}

// export function retrieveAttendance(data) {
//   return service.request({
//     url: `students/getAttendance/${data.studentID}`,
//     method: "GET",
//     data,
//   });
// }


export function addCourseAttendanceRecord(data) {
  return service.request({
    url: `/courseAttendanceRecords/add`,
    method: "PUT",
    data
  })
}

export function getAttendanceDetails(data) {
  return service.request({
    url: `/courseAttendanceRecords/getAttendance/`,
    method: "GET",
    data
  })
}


export function getStudentAttendanceDetails(data) {
  return service.request({
    url: `/courseAttendanceRecords/getAttendance/student`,
    method: "POST",
    data
  })
}


export function getClassAttendanceDetails(data) {
  return service.request({
    url: `/courseAttendanceRecords/getAttendance/class`,
    method: "POST",
    data
  })
}