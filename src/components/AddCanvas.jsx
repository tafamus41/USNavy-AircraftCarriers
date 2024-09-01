import Offcanvas from "react-bootstrap/Offcanvas";

function AddCanvas({ show, onHide, characteristics,name }) {
console.log(characteristics);
  return (
    <>
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
            {Object.entries(characteristics).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddCanvas;
