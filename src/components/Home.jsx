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

function Home(props) {
  const [modalLog, setModalLog] = useState(false);
  const [password, setPassword] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  // async function sendUser(frmData) {
  //   console.log(frmData);

  //   const response = await axios.post("http://localhost:5000/login", {
  //     Email: email,
  //     Password: password,
  //   });

  //   if (response.status === 200) {
  //     localStorage.setItem("token", response);
  //   }
  //   console.log(response.data);
  //   // history.push("/");
  //   window.location.reload();
  // }

  return (
    <div id="Home" className="Home" style={{backgroundImage:Background}}>
      <NavBar />
    </div>
  );
}
export default Home;