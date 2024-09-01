import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const AircraftCard = ({ img, name, characteristics }) => {

  return (
    <Col xs={12} sm={8} md={6}>
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body className="m-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Button  variant="primary">Characteristics</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AircraftCard;
