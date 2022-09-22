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

export function retrieveAttendance(data) {
  return service.request({
    url: `students/getAttendance/${data.studentID}`,
    method: "GET",
    data,
  });
}

export function getAttendanceDetails(data) {
  return service.request({
    url: `lecturers/getAttendance/`,
    method: "GET",
    data,
  })
}

export function addCourseAttendanceRecord(data) {
  return service.request({
    url: `courseAttendanceRecords/`,
    method: "PUT",
    data
  })
}