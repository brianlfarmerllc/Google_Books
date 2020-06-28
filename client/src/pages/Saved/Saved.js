import React, { useState, useEffect } from 'react';
import "./saved.css";
import Card from "../../components/Card/Card";
import BookCardContent from "../../components/BookCardContent/BookCardContent";
import API from "../../utils/Api";

function Saved() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)

            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(event) {
        event.preventDefault();
        const bookId = event.target.name
        API.deleteBook(bookId)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div className="container-fluid mb-5">
            <Card>
                <h2 className="display-4" style={{ textAlign: "center" }}>React Built Google Books Search</h2>
                <p className="lead" style={{ textAlign: "center" }}>View all your saved books</p>
            </Card>
            <Card>
            {books.length ?
                    <h2 className="display-6 mt-2" style={{ textAlign: "start" }}>Saved Books</h2> :
                    <h2 className="display-6 mt-2" style={{ textAlign: "center" }}>Currently No Saved Books</h2>
                }
                {books.map(book => (
                    <Card
                        key={book._id}
                    >
                        <BookCardContent
                            id={book._id}
                            title={book.title}
                            infoLink={book.link}
                            saveBook={deleteBook}
                            saveBookText={"Delete"}
                            subtitle={book.synopsis}
                            authors={book.authors}
                            description={book.description}
                            thumbnail={book.image}

                        />
                    </Card>
                ))}
            </Card>
        </div>
    )
}

export default Saved