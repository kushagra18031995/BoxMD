import React from "react";
import "./App.css";
import Nav from "./component/nav";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import Login from "./component/login";
import Boxmd from "./component/boxMD";
import PatientList from "./component/patientsList";
import PatientSearchInfo from "./component/patientSearchInfo";
import BottomNav from "./component/bottomNav";
import history from "./history";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Boxmd} />
            <Route path="/boxMD" component={Boxmd} />

            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/patientsList" component={PatientList} />
            <Route path="/patientSearchInfo" component={PatientSearchInfo} />
          </Switch>
        </div>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
