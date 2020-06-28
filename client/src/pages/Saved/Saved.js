import React, { useState } from 'react';
import "./saved.css";
import Card from "../../components/Card/Card";
import BookCardContent from "../../components/BookCardContent/BookCardContent";
import { Input, FormBtn } from "../../components/Form/Form";
import API from "../../utils/Api";

function Saved() {
    return (
        <div className="container-fluid">
        <Card>
            <h2 className="display-4" style={{ textAlign: "center" }}>React Built Google Books Search</h2>
            <p className="lead" style={{ textAlign: "center" }}>Search for and save books of interest</p>
        </Card>
        <Card>
            <h2 className="display-6 mt-2" style={{ textAlign: "start" }}>Saved Books</h2>
            {/* {googleBooks.map(book => ( */}
                <Card
                    // key={book.id}
                    >
                    <BookCardContent
                       
                    />
                </Card>
            {/* ))} */}
        </Card>
    </div>
    )
}

export default Saved