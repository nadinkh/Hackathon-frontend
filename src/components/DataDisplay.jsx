import Background from "./BloodOcean.png";
import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataDisplay.css";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";

function DataDisplay(props) {
  return (
    <div
      id="DataDisplay"
      className="DataDisplay"
      style={{ backgroundImage: Background }}
    >
      <NavBar />
    </div>
  );
}
export default DataDisplay;
