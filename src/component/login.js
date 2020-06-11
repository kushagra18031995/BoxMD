import React, { useState } from "react";
import "../App.css";
import GoogleLogin from "react-google-login";
function Login() {
  //initializing state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  //setting state
  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  return (
    <div className="container ">
      <div className="row justify-content-center my-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title font-weight-light">Login With Google</h5>
            <h6 className="card-subtitle mb-2 text-muted ">{name}</h6>
            <h6 className="card-subtitle mb-2 text-muted ">{email}</h6>
            <img src={url} alt={name} />
            <GoogleLogin
              clientId="788954999331-kn3nhf6i0tdtjoe4cv7fo9kjkog7ajae.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
