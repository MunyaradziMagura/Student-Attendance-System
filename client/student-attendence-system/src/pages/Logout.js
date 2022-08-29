import Card from "react-bootstrap/Card";
function Logout() {

  return (
   
     <Card
     style={{
       paddingBottom: "0rem",
       backgroundColor: "#0052a0",
     }}
     id="logout"
     
   >
    
     <Card.Body
       style={{
         color: "white",
       }}
     >
       {/* replace student with role */}
       <Card.Title>You have logged out</Card.Title>
         <h5>  Welcome to come again next time</h5>
     </Card.Body>
     <Card.Footer
       className="text-muted text-center"
       style={{ color: "#FFF" }}
     >
       UNISA
     </Card.Footer>
   </Card>
  );
  
}

export default Logout