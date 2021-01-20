import App from "../App";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import axios from "axios";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import Background from "./BloodOcean.png";
import "./Dashboard.css";
function Dashboard(props) {
  const [modalLog, setModalLog] = useState(false);
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  return (
    <div id="Dashboard">
      <NavBar />
    </div>
  );
}
export default Dashboard;
