import React from "react";
import "./serviceCard.css";
function ServiceCard({ icon, title, text }) {
  return (
    <div className="serviceCard-container">
      {icon}
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
