import React from "react";


function Intro() {
  return (
    <div className='into-container'>
        <div className="intro-card">
          <div className="intro-text">
          <h1 className="intro-text-h1">Alex is your Enterprise Data Platform for workforce productivity.</h1>
            <p class='intro-para'>Alex Solutions is changing enterprise data management with our world-leading Metadata Management Solution that supports the world’s largest data catalog.</p>
            <button class='demo-btn'>Request demo</button>
          </div> 
        </div>
        <div className="intro-image intro-card">
        <img className="img-intro" src="./images/image0.png" alt="how we do it" />
        </div>
  
    </div>
  );
}
export default Intro;
