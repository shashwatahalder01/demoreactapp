import React from "react";
import Card from "./card";

function Cardholder() {
  return (
    <div className='cardholerparent'>
      <h2 className='cardholderh1'>What makes Alex different?</h2>
      <div className="cardholder">
        <Card
          name="Single"
          imgsrc="./images/card1.svg"
          text="Alex is a unified enterprise metadata management platform, as opposed to a collection of disparate products. We give you everything you need to build a single source of truth for data in the enterprise out of the box."
        />
        <Card
          name="Simple"
          imgsrc="./images/card2.svg"
          text="If you’ve used a social media site, you can use Alex. Our design philosophy is one of accessibility, enabling both business and technical users to reduce risk and add value."
        />
        <Card
          name="Social"
          imgsrc="./images/card3.svg"
          text="Alex is built to facilitate collaboration around data. Our suite of social features allow individuals and teams to work together and make data and insights shareable and actionable."
        />
      </div>
    </div>
  );
}
export default Cardholder;
