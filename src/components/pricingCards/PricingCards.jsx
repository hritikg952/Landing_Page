import React from "react";
import "./pricingCards.css";
function PricingCards({ icon, title, feature1, feature2, feature3, price }) {
  return (
    <div className="pricingCard-container">
      {icon}
      <h2>{title}</h2>
      <br />
      <div className="pricingFeature">
        <p>{feature1}</p>
        <p>{feature2}</p>
        <p>{feature3}</p>
      </div>
      <p style={{ color: "#676767" }}>
        $<span style={{ fontSize: "4rem", color: "#000" }}>{price}</span>/Month
      </p>
      <button className="globalButton">Purchase</button>
    </div>
  );
}

export default PricingCards;
