import service from "../../src/utils/request";

/**
 * for  login request
 */

export function userLogin(data) {
  return service.request({
    url: "students/Login",
    method: "POST",
    data,
  });
}
