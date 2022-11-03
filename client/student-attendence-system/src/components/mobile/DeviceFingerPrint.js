import { ClientJS } from "clientjs";
// FINGERPRINT DATA POINTS: Generated as a 32bit hash
// user agent
// screen print
// color depth
// current resolution
// available resolution
// device XDPI
// device YDPI
// plugin list
// font list
// local storage
// session storage
// timezone
// language
// system language
// cookies
// canvas print
export default class DeviceFingerPrint {
  constructor() {
    this.client = new ClientJS();
  }

  fingerprint() {
    return this.client.getFingerprint();
  }
  browser() {
    this.client.getBrowserVersion();
  }
}
