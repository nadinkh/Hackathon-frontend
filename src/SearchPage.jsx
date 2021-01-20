import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchList from './SearchList.jsx'
import NavBar from "./NavBar";

import axios from "axios";


let pets = [];
const SearchPage = (props) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [isBtnClicked, setBtnClicked] = useState(false);
    function BtnClicked(event) {
        setBtnClicked(!isBtnClicked);
    }

    async function onBasicSearch(event) {
        //  event.preventDefault();
        const newSearch = {
            name: name,
        };
        const response = await axios.get(
            `http://localhost:5000/api/?name=${name}` //change
        );
        setSearchList(response.data);
        setShowResults(true);
        console.log(searchList);
    }

    return (
        <>
            {/* <NavBar /> */}

            <div>
                <div>
                    <br></br>
                    <SearchBar />

                </div>
                {searchList.map((hospital) => (
                    <SearchList
                        hospitalName={hospital.name}
                        hospitalCity={hospital.city}
                        hospitalEmail={hospital.email}
                        hospitalCell={hospital.cell}


                    />
                ))}
            </div>
        </>
    );
};

export default SearchPage