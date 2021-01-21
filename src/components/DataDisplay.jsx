import Background from "./BloodOcean.png";
import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataDisplay.css";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import ChartsPage from './graphs'


function DataDisplay(props) {
  return (
    <div
      id="DataDisplay"
      className="DataDisplay"
    >
      <NavBar />
      <div id='Graph'>
      <ChartsPage />
      </div>
    </div>
  );
}
export default DataDisplay;
