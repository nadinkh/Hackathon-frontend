import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  FormGroup,
} from "reactstrap";

function NavBar(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  if (localStorage.getItem("admin") === false) {
  }
  return (
    <div>
      <Navbar expand="md" light faded>
        <NavbarBrand
          href="/Home"
          style={{ fontSize: "34px", color: "red", fontStyle: "Bold" }}
        >
          BloodOcean
        </NavbarBrand>
        <NavLink href="/DataDisplay" style={{ color: "grey" }}>
          {" "}
          Data
        </NavLink>
        <NavLink href="/SearchPage" style={{ color: "grey" }}>
          {" "}
          Search
        </NavLink>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar></Nav>
          <SignUp  />
          <Login style={{marginLeft:"10px"}} />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
