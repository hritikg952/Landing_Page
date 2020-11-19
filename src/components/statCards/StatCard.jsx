import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./statCard.css";
function StatCard({ icon, title, endNum }) {
  return (
    <div className="statCard-container">
      {icon}
      <CountUp end={endNum} duration={5} >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} className="countUp"/>
          </VisibilitySensor>
        )}
      </CountUp>
      <h4>{title}</h4>
    </div>
  );
}

export default StatCard;
