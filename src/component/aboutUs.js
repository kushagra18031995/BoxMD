import React from "react";
import "../App.css";

function AboutUs() {
  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className="card my-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title font-weight-light">About Us</h5>

            <p className="card-text font-weight-light">
              {" "}
              We are developing a product which will make a patient a true
              master of their medical data. We know its not the most clear
              description but consider this as a gift wrap and wait for it to
              unbox in time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
