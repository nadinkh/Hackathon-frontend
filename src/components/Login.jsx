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

  function onLogin(event) {
    event.preventDefault();

    const findUser = {
      email: email,
      password: password,
    };

    onAddUser(findUser);
    console.log(JSON.stringify(findUser));
  }

  function onAddUser(event) {
    const newUser = user;
    console.log(newUser);
  }

  const submitValueLogin = () => {
    const frmdetails = {
      email: email,
      password: password,
    };
    console.log(frmdetails);
    sendUser(frmdetails);
  };

  async function sendUser(frmData) {
    console.log(frmData);

    const response = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      localStorage.setItem("token",response.data.token);
    }
    console.log(response.data);
    history.push("/Home");
    window.location.reload();
  }

  return (
    <div className="Login">
      <Button
        onClick={toggleLog}
        className="LoginBtn"
        id="LoginBtn"
      >
        Login
      </Button>
      <Modal isOpen={modalLog} toggle={toggleLog} id="login">
        <ModalHeader toggle={toggleLog}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => onLogin(event)}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type="primary" color="primary" onClick={submitValueLogin}>
              Log in
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
