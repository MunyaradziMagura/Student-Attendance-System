import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import qrcode from "qrcode";
import { useEffect, useState } from "react";
import DeviceFingerPrint from "./DeviceFingerPrint";
// import image from '../'
function QRCode({ studentInfo }, props) {
  const [personQRSrc, setpersonQRSrc] = useState("");


  // download QR code
  const base64ToBlob = (code) => {
    let parts = code.split(";base64,");
    let contentType = parts[0].split(":")[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType,
    });
  };

  // create fingerprint
  const createFingerprint = new DeviceFingerPrint();
  //get fingerprint
  const fingerprint = createFingerprint.fingerprint();
  // get browser
  const browser = createFingerprint.browser();
  // object of values used to generate qrcode
  const person = {
    deviceFingerPrint: fingerprint,
    browser: browser,
    userName: studentInfo.studentID,
    firstName: studentInfo.firstName,
    lastName: studentInfo.lastName,
    date: String(new Date()),
    courseID: null,
  };
  // generate QR code URL from person object
  useEffect(() => {
    // create QR code
    qrcode.toDataURL(JSON.stringify(person)).then(setpersonQRSrc);
  }, []);

  return (
    <div
      className="d-flex justify-content-around"
      style={{ paddingTop: "1rem"}}
    >
      <Card
        border="info"
        style={{ width: "100%", backgroundColor: "transparent" }}
      >
        {/* visualise QRCode image */}
        <Card.Img
          animation="wave"
          variant="top"
          src={personQRSrc}
          className="img-thumbnail"
        />
        <Card.Body>
          <Card.Title
            style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}
          >
            Your QR code
          </Card.Title>
          {/* <Card.Text style={{ color: "white" }}>
            To draw on software engineering principles, practices and research
            methods and apply professional skills to produce an agreed upon
            software artefact for a client, while working in a project team.
          </Card.Text> */}
          <Button
            onClick={() => {
              let aLink = document.createElement("a");
              let blob = base64ToBlob(personQRSrc);
              let evt = document.createEvent("HTMLEvents");
              evt.initEvent("click", true, true);
              aLink.download = "qrcode";
              aLink.href = URL.createObjectURL(blob);
              aLink.click();
              aLink.remove();
            }}
            variant="primary"
          >
            Download QR
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QRCode;
