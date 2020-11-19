import React from "react";
import "./pricing.css";
import PricingCards from "../pricingCards/PricingCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faChartPie, faRocket } from "@fortawesome/free-solid-svg-icons";
function Pricing() {
  const data = [
    {
      icon: <FontAwesomeIcon icon={faRocket} style={{ fontSize: "4rem",marginBottom:"25px" }} />,
      title: "FREE",
      feature1: "Easy Installations",
      feature2: "Unlimited Support",
      feature3: "FREE forever",
      price: "0",
    },
    {
      icon: <FontAwesomeIcon icon={faGem} style={{ fontSize: "4rem",marginBottom:"25px" }} />,
      title: "SILVER",
      feature1: "Easy Installations",
      feature2: "Unlimited Support",
      feature3: "FREE forever",
      price: "50",
    },
    {
      icon: <FontAwesomeIcon icon={faChartPie} style={{ fontSize: "4rem",marginBottom:"25px" }} />,
      title: "GOLDEN",
      feature1: "Easy Installations",
      feature2: "Unlimited Support",
      feature3: "FREE forever",
      price: "100",
    },
  ];
  return (
    <div className="pricing-container">
      <h5>PRICING</h5>
      <h1>You Can Hire Me</h1>
      <div className="pricing-card-container">
        {data.map((d, index) => {
          return (
            <PricingCards
              key={index}
              icon={d.icon}
              title={d.title}
              feature1={d.feature1}
              feature2={d.feature2}
              feature3={d.feature3}
              price={d.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
