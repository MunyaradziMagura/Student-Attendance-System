import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import qrcode from "qrcode";
import { useEffect, useState } from "react";
import DeviceFingerPrint from "./DeviceFingerPrint";
// import image from '../'
function QRCode({ studentInfo }, props) {
  const [personQRSrc, setpersonQRSrc] = useState("");

  // get Device fineger print
  const [fingerPrint, setFingerprint] = useState();

  const passFingerPrint = (data) => {
    // set finger print
    setFingerprint(data);
  };

  // download QR code
  const base64ToBlob = (code) => {
    var parts = code.split(";base64,");
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType,
    });
  };

  // object of values used to generate qrcode
  const person = {
    deviceFingerPrint: fingerPrint,
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
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <DeviceFingerPrint passFingerPrint={passFingerPrint} />
      <Card
        border="info"
        style={{ width: "100%", backgroundColor: "transparent" }}
      >
        {/* visualise QRCode image */}
        <Card.Img
          animation="wave"
          variant="top"
          src={personQRSrc}
          class="img-thumbnail"
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
