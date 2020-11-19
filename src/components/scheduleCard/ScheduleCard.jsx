import React from "react";
import "./scheduleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
function ScheduleCard({ title, text }) {
  return (
    <div className="scheduleCard-container">
      <h3>{title}</h3>
      <h5>
        <span>
          <FontAwesomeIcon icon={faIgloo} />
        </span>{" "}
        demosport
      </h5>
      <p>{text}</p>
    </div>
  );
}

export default ScheduleCard;
