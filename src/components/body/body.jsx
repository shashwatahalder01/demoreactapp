import React from "react";
import Intro from './intro'
import Cardholder from './cardholder'
import Section1 from './section1'
import Section2 from './section2'
import Newslettersignup from './newsletter'
function Compo() {

  return (
    <div className="body-container">
      <Intro/>
      <Cardholder/>
      <Section1/>
      <Section2/>
      <Newslettersignup/>
    </div>
  );
}

export default Compo;