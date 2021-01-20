import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList.jsx";
import axios from "axios";
import { Form, Button, InputGroup, Input } from "reactstrap";
import NavBar from "../src/components/NavBar";
import "./SearchPage.css";

const SearchPage = (props) => {
  const [showResults, setShowResults] = useState("");
  const [searchList, setSearchList] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [keyword, setKeyword] = useState("");

  console.log(keyword);

  async function onBasicSearch(event) {
    event.preventDefault();
    console.log('Working');
    const newSearch = {
      city: city,
    };
    
    try {
        console.log('her1')
    const response = await axios.get(
      `http://localhost:5000/hospital/search?city=${keyword}` //change
    );
    console.log(response.data)
    setSearchList(response.data);
    setShowResults(true); }
    catch(e) {
        console.log(e)
    }
    console.log("here1")

  }

  return (
    <>
      <NavBar />
      <div className="search-container">
        <div>
          <br></br>

          <div>
            <Form inline id="formInline">
              <InputGroup>
                <Input
                  className="search-input"
                  id="searchInput"
                  key="random1"
                  value={keyword}
                  placeholder="search"
                  onChange={(e) => setKeyword(e.target.value)
                }
                />
                <Button
                  variant="outline-success"
                  style={{ backgroundColor: "#f92672" }}
                  onClick={(event) => onBasicSearch(event)}
                >
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
        {searchList && (
          <ul>
            {searchList.map((hospital) => (
              <SearchList
                hospitalId={hospital._id}
                hospitalName={hospital.name}
                hospitalCity={hospital.city}
                hospitalEmail={hospital.email}
                hospitalCell={hospital.cell}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchPage;
