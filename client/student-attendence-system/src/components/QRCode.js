import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import qrcode from 'qrcode';
import {useEffect, useState} from 'react';

// import image from '../'
function QRCode(props) {

  // props should take in a person object 
  const person = {
    person: "munya",
    lastName: "magura",
    classID: 1234456789,
  }

  const [src, setSrc] = useState('');

  useEffect(() => {
    // create QR code 
    qrcode.toDataURL(JSON.stringify(person)).then(setSrc);
  }, [])

  return (
    <div className="d-flex justify-content-around" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
      <Card border="info" style={{ width: '100%', backgroundColor: "transparent" }}>
        {/* visualise QRCode image */}
        <Card.Img animation="wave" variant="top" src={src} class="img-thumbnail"/>
        <Card.Body>
          <Card.Title style={{color: "white", fontWeight: "bold", fontSize: "2rem"}}>It Project QR</Card.Title>
          <Card.Text style={{color: "white"}}>
          To draw on software engineering principles, practices and research methods and apply professional skills to produce an agreed upon software artefact for a client, while working in a project team.
          </Card.Text>
          <Button variant="primary">Download Qr</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default QRCode