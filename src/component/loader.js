import Loader from "react-loader-spinner";
import React from "react";
function SearchLoader() {
  return (
    <div className="container mt-5 text-center">
      {" "}
      <Loader type="Puff" color="#dc3545" height="100" width="100" />
    </div>
  );
}
export default SearchLoader;
