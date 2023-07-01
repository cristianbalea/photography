import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Product(props) {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <Card
        style={{ width: "75%", "max-width": "70rem", transform: "scale(1)" }}
      >
        <Card.Header>
          <Row>
            <Col>
              <h3>{props.title}</h3>
            </Col>
            <Col>
              {" "}
              <button className="button">Cumpara!</button>
            </Col>
          </Row>
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
      </Card>
    </div>
  );
}

export default Product;
