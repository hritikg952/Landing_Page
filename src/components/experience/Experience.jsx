import React from "react";
import "./experience.css";
import ScheduleCard from "../scheduleCard/ScheduleCard";
function Experience() {
  const data = [
    {
      title: "LATEST ANIMATION",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    },
    {
      title: "MASTER IN WEBDESIGN",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    },
    {
      title: "ADVANCE DEGREE",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    },
    {
      title: "LATEST ANIMATION",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    },
  ];
  return (
    <div className="experience-container">
      <h5>Details</h5>
      <h1>Services & Experience</h1>
      <div className="banner">
        <p>Thursday, November 19,2020</p>
      </div>
      <div className="schedule-container">
        {data.map((d, index) => {
          return <ScheduleCard key={index} title={d.title} text={d.text} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
