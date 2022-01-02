import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white rounded-0">
        <img src="/assets/cover3.jpg" class="card-img" alt="background" 
          height="500px" />
        <div className="card-img-overlay">
            <div className="container">
            <h5 class="card-title display-3">SEASON SALES IS ON!</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
