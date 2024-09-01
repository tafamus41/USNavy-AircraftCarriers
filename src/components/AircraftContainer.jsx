import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import AircraftCard from "./AircraftCard";

const AircraftContainer = () => {
//   console.log(data);
  return (
    <Container>
      <Row className=" g-5">
        {data.map((ship) => (
          <AircraftCard key={ship.id} {...ship}/>
        ))}
      </Row>
    </Container>
  );
};

export default AircraftContainer;
