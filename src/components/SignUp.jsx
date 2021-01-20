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
  Col,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";

function SignUp(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [insurance, setInsurance] = useState("");
  const [personalD, setPersonalID] = useState("");
  const [previousDonor, setPreviousDonor] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  function onSignUp(event) {
    event.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cell: cell,
      bloodType: bloodType,
      insurance: insurance,
      personalID: personalD,
      previousDonor: previousDonor,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    setUser(newUser);
    console.log(user);
    Register(newUser);
  }

  // function onLogin(event) {
  //   event.preventDefault();

  //   const findUser = {
  //     Email: email,
  //     Password: password,
  //   };

  //   getUser(findUser);
  //   onAddUser(findUser);
  //   console.log(JSON.stringify(findUser));
  // }

  // function onAddUser(event) {
  //   const newUser = user;
  //   console.log(newUser);
  // }

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");

  async function Register(frmData) {
    console.log(frmData);

    const response = "";
    //await axios(frmData);

    if (response.status === 200) {
      localStorage.setItem("token", response);
    }
    console.log(response.data);
    history.push("/Home");
    window.location.reload();
  }

  return (
    <div>
      <div className="Signup">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="Signup"
          style={{
            height: "70px",
            width: "130px",
            borderRadius: "20px",
            fontSize: "20px",
            left: "20px",
          }}
        >
          Sign up
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            Sign up
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onSignUp(event)}>
              <FormGroup>
                <Label for="firstName">First name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) => setfName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setlName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Cell:</Label>
                <Input
                  type="text"
                  name="cellPhone"
                  id="cellPhone"
                  placeholder="Cell phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
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
                <Label for="Insurance">Medical Insurance: </Label>
                <Input
                  type="text"
                  name="insurance"
                  id="exampleInsurance"
                  placeholder="Insurance"
                  onChange={(e) => setInsurance(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="personalID">Personal ID: </Label>
                <Input
                  type="text"
                  name="personalID"
                  id="personalID"
                  placeholder="personalID"
                  onChange={(e) => setPersonalID(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bloodType">Blood Type: </Label>
                <Input
                  type="text"
                  name="bloodType"
                  id="bloodType"
                  placeholder=""
                  onChange={(e) => setBloodType(e.target.value)}
                />
              </FormGroup>
              <FormGroup row>
                <Label for="checkbox2" sm={2}>
                  Are you a previous donor?
                </Label>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkboxDonor" /> Yes
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePasswordConfirm">Confirm password:</Label>
                <Input
                  type="passwordConfirm"
                  name="passwordConfirm"
                  id="PasswordConfirm"
                  placeholder="Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </FormGroup>
              <Button
                type="primary"
                color="primary"
                onClick={(event) => Register(event)}
              >
                Sign up
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
export default SignUp;
