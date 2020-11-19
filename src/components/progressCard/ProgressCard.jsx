import React from "react";
import "./progressCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ProgressCard({ percentage, text1, text2 }) {
  return (
    <div className="progressCard-container">
      <div style={{width: "100px",height:"100px"}}>
        <CircularProgressbar
          strokeWidth={3}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#000",
            trailColor: "#E3E3E3",
            textColor: "#000",
          })}
        />
      </div>
      <h4 style={{color: "#676767",padding:"10px"}}>{text1}</h4>
      <h4>{text2}</h4>
    </div>
  );
}

export default ProgressCard;
