import React, {useState} from 'react';
import "./search.css";
import Card from "../../components/Card/Card";
import { Input, FormBtn } from "../../components/Form/Form";
import API from "../../utils/Api";

function Search() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };



    function handleFormSubmit(event) {
        event.preventDefault();
        const query = formObject.booksearch
        API.search(query)
       .then(res => console.log(res.data.items))
       .catch(err => console.log(err));

    };

    return (
        <div className="container-fluid">
            <Card>
                <h2 className="display-4" style={{ textAlign: "center" }}>React Built Google Books Search</h2>
                <p className="lead" style={{ textAlign: "center" }}>Search for and save books of interest</p>
            </Card>
            <Card>
                <form>
                    <h2 className="display-5 mb-4" style={{ textAlign: "start" }}>Book Search</h2>
                    <Input
                        onChange={handleInputChange}
                        name="booksearch"
                        placeholder="Book Title (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.booksearch)}
                        onClick={handleFormSubmit}
                    >
                        Search
                    </FormBtn>
                </form>
            </Card>
        </div>
    )
}

export default Search

