import React from "react";
import "./aboutMe.css";
import { Container, Row, Col } from "react-bootstrap";
import ProgressCard from "../progressCard/ProgressCard";
function AboutMe() {
  const data = [
    { percentage: 90, text1: "Photoshop", text2: "4 Years Experience" },
    { percentage: 95, text1: "Illustrator", text2: "4 Years Experience" },
    { percentage: 80, text1: "HTML & CSS", text2: "4 Years Experience" },
    { percentage: 70, text1: "Wordpress", text2: "4 Years Experience" },
  ];
  return (
    <div className="aboutMe-section">
      <Container fluid>
        <Row>
          <Col>
            <h4>About Me</h4>
          </Col>
        </Row>
        <Row>
          <div className="aboutMe-card-section">
            {data.map((d, index) => {
              return (
                <Col key={index} xs={12} md={3}>
                  <ProgressCard
                    percentage={d.percentage}
                    text1={d.text1}
                    text2={d.text2}
                  />
                </Col>
              );
            })}
          </div>
        </Row>
        <Row>
          <Col>
            <button className="globalButton">Know More</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
