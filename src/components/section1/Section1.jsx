import React from "react";
import Typist from "react-typist";
import "./section1.css";
import businessGirl from "../../asset/images/h7.png";
import { Container, Row, Col } from "react-bootstrap";

function Section1() {
  return (
    <div className="section1-container">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <img src={businessGirl} className="section1-img" />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "10px 0",
            }}
          >
            <h5
              style={{ letterSpacing: "7px", fontFamily: "poppins,sans-sarif" }}
            >
              # RESUME
            </h5>
            <h1
              style={{
                fontSize: "60px",
                letterSpacing: "2px",
                fontWeight: "700",
                marginTop: "20px"
              }}
            >
              Hi, I'm{" "}
            </h1>
            <h1
              style={{
                fontSize: "60px",
                letterSpacing: "2px",
                fontWeight: "400",
              }}
            >
              Elana Parker
            </h1>
            <Typist
              className="animated-text"
              avgTypingDelay={100}
              cursor={{ hideWhenDone: false }}
            >
              HTML,CSS,Bootstrap,Java Script,Jquery
            </Typist>
            <p
              style={{
                textAlign: "left",
                marginTop: "22px",
                lineHeight: "33px",
                fontSize: "1.3rem",
                fontWeight: "300",
                color: "#676767",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing andtypesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              textever since the 1500s, when an unknown
            </p>
            <div style={{
                display: "flex",
                marginTop: "40px"
            }}>
                <button className="globalButton" style={{marginRight: "30px"}}>Know More</button>
                <button className="globalButton">Download CV</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section1;
