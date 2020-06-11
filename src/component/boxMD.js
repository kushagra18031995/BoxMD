import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "../App.js";

function Boxmd(props) {
  //initializing state
  const [name, setName] = useState("");

  //hadling search
  let handleNameInput = (e) => {
    let value = e.target.value;
    console.log(value);
    setName(e.target.value);
  };

  //debugger
  let handleClick = () => {
    console.log(name, "input name in search bar");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center ">
                  Search Patient's Detail
                </h5>
                <form className="form-signin ">
                  <div className="form-label-group mb-3">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Patient's Name"
                      required
                      name={name}
                      onChange={(e) => handleNameInput(e)}
                    ></input>
                  </div>
                  <div className="btn-change">
                    <button
                      className="btn btn-normal  btn-secondary text-uppercase "
                      type="submit"
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <Link
                        className="text-white"
                        to={{
                          pathname: "/patientSearchInfo",
                          state: { name: name },
                        }}
                      >
                        Search
                      </Link>
                    </button>
                  </div>
                  <h1 className="my-4">
                    <button
                      className="btn btn-lg btn-secondary btn-block text-uppercase "
                      type="submit"
                      onClick={() => {
                        props.history.push("/patientsList");
                      }}
                    >
                      <Link to="/patientsList " className="text-white">
                        Get All Patients
                      </Link>
                    </button>
                  </h1>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Boxmd);
