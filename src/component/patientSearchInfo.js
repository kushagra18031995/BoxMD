import React, { useState, useEffect } from "react";
import SearchLoader from "./loader";
import { url, authKey } from "./helper";

function PatientSearchInfo(props) {
  useEffect(() => {
    item();
  }, []);
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  const [dob, setDob] = useState("");
  const [contactNo, setContact] = useState("");

  //intigrating API
  const item = async () => {
    const headers = {
      Authorization: authKey,
    };
    var name = props.location.state.name;
    const information = await fetch(`${url}?name=${name}`, {
      headers: headers,
    });

    const info = await information.json();
    setInfo(info);

    console.log(info, "^&^&^&^&^&^&^&^");

    if (info.total === 0) {
      setName(name);
    } else {
      setName(name);
      setGender(info.entry[0].resource.gender);
      setCity(
        info.entry[0].resource.address
          ? info.entry[0].resource.address[0].city
          : "NA"
      );

      setId(info.entry[0].resource.id);

      setDob(info.entry[0].resource.birthDate);

      setContact(
        info.entry[0].resource.telecom
          ? info.entry[0].resource.telecom[0].value
          : "NA"
      );
    }
  };
  return (
    <div>
      {Object.keys(info).length === 0 ? (
        <SearchLoader />
      ) : (
        <div className="container mx-5">
          <h1 className="text-center font-weight-light">
            Personal Information
          </h1>
          <div className="px-5 font-weight-light">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Categories</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Name</td>

                  <td>{name ? name : "Name Unknown"} </td>
                </tr>
                <tr>
                  <td>Gender</td>

                  <td>{gender ? gender : "NA"} </td>
                </tr>
                <tr>
                  <td>Address</td>

                  <td>{city ? city : "NA"} </td>
                </tr>
                <tr>
                  <td>ID</td>

                  <td>{id ? id : "NA"} </td>
                </tr>
                <tr>
                  <td>D.O.B</td>

                  <td>{dob ? dob : "NA"} </td>
                </tr>
                <tr>
                  <td>Contact No.</td>

                  <td>{contactNo ? contactNo : "NA"} </td>
                </tr>
                <tr>
                  <td>Patienst's Medical History</td>

                  <td>
                    <button type="button" className="btn btn-link">
                      Report
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
export default PatientSearchInfo;
