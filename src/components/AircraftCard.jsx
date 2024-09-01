import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const AircraftCard = ({ img, name, characteristics }) => {
//   console.log(name);
  return (
    <Col>
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Characteristics</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AircraftCard;
