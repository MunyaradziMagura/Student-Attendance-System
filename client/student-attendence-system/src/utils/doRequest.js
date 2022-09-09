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
