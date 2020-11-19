import React from "react";
import "./stats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileBeam,
  faLightbulb,
  faHistory,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import StatCard from "../statCards/StatCard";

function Stats() {
  const data = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faSmileBeam}
          style={{ fontSize: "4rem", color: "#fff" }}
        />
      ),
      text: "Satisfied Customer",
      endNum: 345,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{ fontSize: "4rem", color: "#fff" }}
        />
      ),
      text: "Total Speaker",
      endNum: 57,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faHistory}
          style={{ fontSize: "4rem", color: "#fff" }}
        />
      ),
      text: "Hours Worked",
      endNum: 1247,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faTrophy}
          style={{ fontSize: "4rem", color: "#fff" }}
        />
      ),
      text: "Awwards Winning",
      endNum: 9,
    },
  ];
  return (
    <div className="stats-container">
      {data.map((d, index) => {
        return (
          <StatCard
            key={index}
            icon={d.icon}
            title={d.text}
            endNum={d.endNum}
          />
        );
      })}
    </div>
  );
}

export default Stats;
