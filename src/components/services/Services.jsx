import React from "react";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faPalette,
  faLaptopCode,
  faMobileAlt,
  faBullhorn,
  faUser,
  faAmericanSignLanguageInterpreting,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "../serviceCards/ServiceCard";
function Services() {
  const data = [
    {
      icon: (
        <FontAwesomeIcon icon={faPaintBrush} style={{ fontSize: "4rem" }} />
      ),
      title: "UI Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} style={{ fontSize: "4rem" }} />,
      title: "UX Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: "4rem" }} />
      ),
      title: "Web Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} style={{ fontSize: "4rem" }} />,
      title: "Web Developer",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "4rem" }} />,
      title: "Web Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} style={{ fontSize: "4rem" }} />,
      title: "Web Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faAmericanSignLanguageInterpreting}
          style={{ fontSize: "4rem" }}
        />
      ),
      title: "Web Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
    {
      icon: <FontAwesomeIcon icon={faLeaf} style={{ fontSize: "4rem" }} />,
      title: "Web Design",
      text:
        "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.",
    },
  ];
  return (
    <div className="service-container">
      <h5>Details</h5>
      <h1>Services & Experience</h1>
      <div className="service-card-section">
        {data.map((d, index) => {
          return <ServiceCard icon={d.icon} title={d.title} text={d.text} />;
        })}
      </div>
    </div>
  );
}

export default Services;
