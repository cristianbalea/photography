import "./AboutTile.scss";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function AboutTile(props) {
  const navigate = useNavigate();

  function contact() {
    navigate("/contact");
  }

  return (
    <div>
      <Card>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Image fluid src={props.src}></Image>
          <button className="button" onClick={contact}>
            Cumpara!
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutTile;
