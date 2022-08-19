import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import qrcode from "qrcode";
import { useEffect, useState } from "react";
import axios from "axios";
import DeviceFingerPrint from "./DeviceFingerPrint";
// import image from '../'
function QRCode(props) {
  // props should take in a person object
  const person = {
    deviceFingerPrint: "712g321gv3",
    person: "munya",
    lastName: "magura",
    classID: 1234456789,
    date: String(new Date()),
  };

  const [src, setSrc] = useState("");

  // get Device fineger print
  const [fingerPrint, setFingerprint] = useState();

  const passFingerPrint = (data) => {
    // set finger print
    setFingerprint(data);
  };

  useEffect(() => {
    // get courseDetail
    let courseId = "62e619985c33f183596c0ac3";
    // get courseDetail
    axios({
      method: "GET",
      url: `http://localhost:5000/api/courses/detail/${courseId}`,
    })
      .then((res) => {
        console.log("res = ", res.data);

        // create QR code
        qrcode.toDataURL(JSON.stringify(res.data)).then(setSrc);
      })
      .catch((err) => {
        console.log("err = ", err);
      });
  }, []);

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
          src={src}
          class="img-thumbnail"
        />
        <Card.Body>
          <Card.Title
            style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}
          >
            It Project QR
          </Card.Title>
          <Card.Text style={{ color: "white" }}>
            To draw on software engineering principles, practices and research
            methods and apply professional skills to produce an agreed upon
            software artefact for a client, while working in a project team.
          </Card.Text>
          <Button
            onClick={() => {
              let aLink = document.createElement("a");
              let blob = base64ToBlob(src);
              let evt = document.createEvent("HTMLEvents");
              evt.initEvent("click", true, true);
              aLink.download = "qrcode";
              aLink.href = URL.createObjectURL(blob);
              aLink.click();
              aLink.remove();
            }}
            variant="primary"
          >
            Download Qr
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QRCode;
