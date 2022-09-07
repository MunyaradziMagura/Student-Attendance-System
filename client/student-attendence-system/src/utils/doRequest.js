import service from "../../src/utils/request";

/**
 * for  login request
 */

export function userLogin(data) {
  console.log(data.role);
  return service.request({
    url: `/${data.role}/Login`,
    method: "POST",
    data,
  });
}
