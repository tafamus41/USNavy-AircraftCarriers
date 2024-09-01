import Offcanvas from "react-bootstrap/Offcanvas";

function AddCanvas({ show, onHide, characteristics, name, img }) {
  console.log(characteristics);
  return (
    <>
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={img} alt="" />
          <ul className="my-5">
            {Object.entries(characteristics).map(([key, value]) => (
              <li className="list-unstyled" key={key}>
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
