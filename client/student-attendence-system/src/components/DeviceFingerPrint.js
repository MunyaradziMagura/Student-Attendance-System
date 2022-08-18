import React from "react";
import { ClientJS } from "clientjs";
// prop used to pass the fingerprint to the QR code component
const DeviceFingerPrint = ({ passFingerPrint }) => {
  // Create a new ClientJS object
  const client = new ClientJS();
  // Get the client's fingerprint id
  const fingerprint = client.getFingerprint();
  // Print the 32bit hash id to the console
  console.log(fingerprint);

  return passFingerPrint(fingerprint);
};

export default DeviceFingerPrint;
