import './searchBar.css'
import { Form, Button, InputGroup, Input } from 'reactstrap';
import React, { useState, useEffect } from "react";

const SearchBar = () => {


    const [keyword, setKeyword] = useState("");



    return (
        <div className="search-container">
            <Form inline>
                <InputGroup>

                    <Input className="search-input"
                        key="random1"
                        value={keyword}
                        placeholder="search"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>

                </InputGroup>

            </Form>
        </div>


    )

}
export default SearchBar