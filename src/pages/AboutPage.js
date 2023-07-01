import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./AboutPage.scss";
import AboutTile from "../components/AboutTile";

function AboutPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
          </Col>
          <Col>
            <p className="title">
              Cristian Foto&Video - totul din pasiune pentru tine si familia ta
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              non sodales neque sodales. Odio ut sem nulla pharetra diam. Donec
              massa sapien faucibus et molestie. Tempor commodo ullamcorper a
              lacus vestibulum. Aliquam malesuada bibendum arcu vitae elementum
              curabitur vitae. Egestas quis ipsum suspendisse ultrices gravida
              dictum. Leo vel orci porta non pulvinar neque laoreet suspendisse
              interdum. A diam sollicitudin tempor id eu nisl nunc mi. Viverra
              nam libero justo laoreet sit amet cursus sit. Quis lectus nulla at
              volutpat diam ut venenatis.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <AboutTile
              title="Poze nunta"
              src="https://www.theknot.com/tk-media/images/96f561ae-344a-41ed-98e8-1c24856977d9~rs_768.h"
            ></AboutTile>
          </Col>
          <Col>
            <AboutTile
              title="Poze botez"
              src="https://images.squarespace-cdn.com/content/v1/5434864ae4b025c654177aaf/1506482666785-8ZVK0DP5UTG3Y81DD1R0/family-pic-at-greek-orthodox-christening.jpg"
            ></AboutTile>
          </Col>
          <Col>
            <AboutTile
              title="Poze majorat"
              src="https://i.pinimg.com/736x/3b/50/c5/3b50c522e66d2f78fa91acbcb28cf6a6.jpg"
            ></AboutTile>
          </Col>
        </Row>
        <Row>
          <Col>
            <AboutTile
              title="Poze nunta"
              src="https://www.theknot.com/tk-media/images/96f561ae-344a-41ed-98e8-1c24856977d9~rs_768.h"
            ></AboutTile>
          </Col>
          <Col>
            <AboutTile
              title="Poze nunta"
              src="https://images.squarespace-cdn.com/content/v1/5434864ae4b025c654177aaf/1506482666785-8ZVK0DP5UTG3Y81DD1R0/family-pic-at-greek-orthodox-christening.jpg"
            ></AboutTile>
          </Col>
          <Col>
            <AboutTile
              title="Album majorat"
              src="https://i.pinimg.com/736x/3b/50/c5/3b50c522e66d2f78fa91acbcb28cf6a6.jpg"
            ></AboutTile>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
