import React from "react";
import { ClientJS } from "clientjs";
// prop used to pass the fingerprint to the QR code component
const DeviceFingerPrint = ({ passFingerPrint }) => {
  // Create a new ClientJS object
  const client = new ClientJS();
  // Get the client's fingerprint id
  const fingerprint = client.getFingerprint();
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
  console.log(fingerprint);
  return passFingerPrint(fingerprint);
};

export default DeviceFingerPrint;

// deterct browser
