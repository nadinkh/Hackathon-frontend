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

console.log(props)

  return (
    <div id="Confirmation" className="Confirmation" style={{backgroundImage:Background}}>
      <NavBar />
      <div id='Appointments'>
      <h3> 
      Hospital: Mercy Hospital <br></br>
      City: Fairfield <br></br>
      Date: Sunday, 14th of February 10:00 am <br></br>
      Booking ID: 2344758747y87 <br></br>
      Your email address: chesackstein@gmail.com
      </h3>
      </div>
    </div>
  );
}
export default ConfirmationPage;