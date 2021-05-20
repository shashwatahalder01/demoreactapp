import React from "react";


function Navbar() {
  return (
    
    <div className="navbar-container">
        <span class='al'>Alex</span>
        {/* <span class='al'>sh</span> */}
        {/* <span class='al'><img className="img-intro" src="./images/logo.png" alt="logo" /></span> */}
        {/* <span class='al'><img  src="./images/logo.png" alt="logo" /></span> */}
        {/* <a class="nav-link al" href="https://alexsolutions.com.au/request-demo/"><img  src="./images/logo.png" alt="logo" /></a> */}
        <a class="nav-link " href="https://alexsolutions.com.au/request-demo/">Product</a>
        <a class="nav-link" href="https://alexsolutions.com.au/request-demo/">Solutions</a>
        <a class="nav-link" href="https://alexsolutions.com.au/request-demo/">Why Alex</a>
        <a class="nav-link" href="https://alexsolutions.com.au/request-demo/">Customers</a>
        <a class="nav-link" href="https://alexsolutions.com.au/request-demo/">Partners</a>
        <a class="nav-link" href="https://alexsolutions.com.au/request-demo/">About Us</a>
        <button class='demo-btn'>Request demo</button>
    </div>

    

  );
}
export default Navbar;