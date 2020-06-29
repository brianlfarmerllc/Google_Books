import React, { useState } from 'react';
import "./search.css";
import Card from "../../components/Card/Card";
import BookCardContent from "../../components/BookCardContent/BookCardContent";
import { Input, FormBtn } from "../../components/Form/Form";
import API from "../../utils/Api";

function Search() {
    const initialForm = { booksearch: "" }
    const [formObject, setFormObject] = useState(initialForm)
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
            .then(() => setFormObject(initialForm))
            .catch(err => console.log(err));

    };

    function saveBookInfo(event) {
        event.preventDefault();
        const bookId = event.target.name
        console.log(bookId)
        API.searchById(bookId)
            .then(res => saveBookToDb(res.data))
            .catch(err => console.log(err));
    }

    function saveBookToDb(book) {
        const bookinfo = {
            title: book.volumeInfo.title === undefined ? "No Title Available" : book.volumeInfo.title,
            authors: book.volumeInfo.authors === undefined ? "No Author Information Available" : book.volumeInfo.authors,
            synopsis: book.volumeInfo.subtitle === undefined ? "No Subtitle Available" : book.volumeInfo.subtitle,
            description: book.volumeInfo.description === undefined ? "No Description Available" : book.volumeInfo.description,
            image: book.volumeInfo.imageLinks === undefined ? "https://placehold.it/200x200" : book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink === undefined ? "No Link Available" : book.volumeInfo.infoLink,
        }
        API.saveBook(bookinfo)
            .catch(err => console.log(err));
    }

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
                        value={formObject.booksearch || ''}
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
                {googleBooks.length ?
                    <h2 className="display-6 mt-2" style={{ textAlign: "start" }}>Search Results</h2> :
                    <h2 className="display-6 mt-2" style={{ textAlign: "center" }}>No Search Results</h2>
                }

                {googleBooks.map(book => (
                    <Card
                        key={book.id}>
                        <BookCardContent
                            id={book.id}
                            title={book.volumeInfo.title === undefined ? "No Title Available" : book.volumeInfo.title}
                            infoLink={book.volumeInfo.infoLink === undefined ? "No Link Available" : book.volumeInfo.infoLink}
                            saveBook={saveBookInfo}
                            saveBookText={"Save"}
                            subtitle={book.volumeInfo.subtitle === undefined ? "No Subtitle Available" : book.volumeInfo.subtitle}
                            authors={book.volumeInfo.authors === undefined ? [] : book.volumeInfo.authors}
                            description={book.volumeInfo.description === undefined ? "No Description Available" : book.volumeInfo.description}
                            thumbnail={book.volumeInfo.imageLinks === undefined ? "https://placehold.it/130x180" : book.volumeInfo.imageLinks.thumbnail}
                        />
                    </Card>

                ))}
            </Card>
        </div>
    )
}

export default Search

