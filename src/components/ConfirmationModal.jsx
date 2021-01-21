import "./Home.css";
import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import './Login.css'
function Login(props) {
  const [user, setUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);
  const [isAdmin, setIsAdmin] = useState(false);





  return (
    <div className="ConfModal">
      <Button
        onClick={toggleLog}
        id="confBtn"
      >
        Login
      </Button>
      <Modal isOpen={modalLog} toggle={toggleLog} id="Confirm">
        <ModalHeader toggle={toggleLog}>Confirm</ModalHeader>
        <ModalBody>
            <Button type="primary" color="primary" onClick={(event) => Redirect(event)}>
             Confirm
            </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
