import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React,{ useState } from 'react';
import AddCanvas from "./AddCanvas";

const AircraftCard = ({ img, name, characteristics }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <Col xs={12} sm={8} md={6} >
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body className="m-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Button onClick={handleShow} variant="primary">Characteristics</Button>
        </Card.Body>
      </Card>
      {show && (
        <AddCanvas
          show={show}
          onHide={handleClose}
          name={name}
          characteristics={characteristics}
        />
      )}
    </Col>
  );
};

export default AircraftCard;
