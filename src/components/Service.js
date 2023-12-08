import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router";

function Service(props) {
  const navigate = useNavigate();
  function contact() {
    navigate("/contact");
  }
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <Card
        style={{ width: "75%", "max-width": "70rem", transform: "scale(1)" }}
      >
        <Card.Header>
          <h3>{props.title}</h3>
        </Card.Header>
        <Row>
          <Col>
            <Card.Body>
              <Image fluid src={props.img}></Image>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>{props.description}</Card.Body>
          </Col>
        </Row>
        <Card.Footer>
          <button className="button" onClick={contact}>
            Rezerva!
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Service;
