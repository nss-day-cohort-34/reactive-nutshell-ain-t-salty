import React, { Component } from "react";
import NavBar from "./Nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

class Nutshell extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default Nutshell;
