import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import SearchLoader from "./loader";
import { url, authKey } from "./helper";

function PatientList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  //integrating API
  const fetchItems = async () => {
    const headers = {
      Authorization: authKey,
    };

    const dataa = await fetch(url, {
      headers: headers,
    });

    //populating API
    const data = await dataa.json();

    setItems(data.entry);
  };

  return (
    <div>
      {items.length === 0 ? (
        <SearchLoader />
      ) : (
        <div className="container mx-5 font-weight-light">
          <h1 className="text-center font-weight-light">Patient list</h1>
          <div className="px-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>

              {items.map((item, index) => {
                return (
                  <tbody key={item.resource.id}>
                    <tr>
                      <td>{item.resource.id}</td>

                      <td>
                        {" "}
                        {item.resource.name ? (
                          <Link
                            to={{
                              pathname: "/patientsearchinfo",
                              state: { name: item.resource.name[0].given[0] },
                            }}
                          >
                            {item.resource.name[0].given[0]}
                          </Link>
                        ) : (
                          "unknown"
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(PatientList);
