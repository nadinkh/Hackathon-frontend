import Background from "./BloodOcean.png";
import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormText,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import './ConfirmationPage.css'
function ConfirmationPage(props) {
  const [modalLog, setModalLog] = useState(false);
  const [password, setPassword] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);


  return (
    <div id="Confirmation" className="Confirmation" style={{backgroundImage:Background}}>
      <NavBar />
      <h1> Hospital: {props.name}
      </h1>
      <h2> Address: {props.location}
      </h2>
      <h3> Date: {props.date}
      </h3>
      <h4> Booking ID: {props._id}
      </h4>
      <h5> Your email address: {props.email}
      </h5>
    </div>
  );
}
export default ConfirmationPage;