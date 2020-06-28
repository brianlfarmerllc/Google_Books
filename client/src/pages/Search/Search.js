import React, { useState } from 'react';
import "./search.css";
import Card from "../../components/Card/Card";
import { Input, FormBtn } from "../../components/Form/Form";
import API from "../../utils/Api";

function Search() {
    const [formObject, setFormObject] = useState({})
    const [googleBooks, setGoogleBooks] = useState([])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };



    function handleFormSubmit(event) {
        event.preventDefault();
        const query = formObject.booksearch
        API.search(query)
            .then(res => setGoogleBooks(res.data.items))
            .then(() => setFormObject({}))
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
                        placeholder="Book Keyword (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.booksearch)}
                        onClick={handleFormSubmit}
                    >
                        Search
                    </FormBtn>
                </form>
            </Card>
            <Card>
                <h2 className="display-6" style={{ textAlign: "start" }}>Search Results</h2>
                {googleBooks.map(book => (
                    <Card 
                    key={book.id}>
                        <div className="row justify-content-between">
                            <div className="col-8">
                                <h6 className="" style={{ textAlign: "start" }}>{book.volumeInfo.title}</h6>
                            </div>
                            <div className="col justify-content-end">
                                <button type="button" className="btn btn-success ml-4">Save</button>
                            </div>
                            <div className="col justify-content-end">
                                <a href={book.volumeInfo.infoLink} target="blank"><button type="button" className="btn btn-primary">View</button></a>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-8">
                                <p style={{ textAlign: "start" }}>{book.volumeInfo.subtitle || "No Subtitle Available"}</p>
                                <p style={{ textAlign: "start" }}>
                                    Written By: {book.volumeInfo.authors.toString()}</p>
                            </div>
                        </div>
                        <div className="row mt-4 justify-content-between">
                            <div className="col">
                                <img className="" alt={book.volumeInfo.title}
                                src={book.volumeInfo.imageLinks === undefined ? "https://placehold.it/200x200" : book.volumeInfo.imageLinks.thumbnail} 
                                style={{ textAlign: "start" }}/>
                            </div>
                            <div className="col-8">
                                <p className="" style={{ textAlign: "start" }}>{book.volumeInfo.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </Card>
        </div>
    )
}

export default Search

